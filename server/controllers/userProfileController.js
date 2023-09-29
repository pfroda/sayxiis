const db = require('../models/connectionDB');
const userProfile = db.userProfile;
const photosDb = db.photo;
const TOKEN_SECRET = require('../config/auth.config')
const tokenTEST = 'GoCintiaGo!'
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

async function getAllUsers(req, res) {
  try {
    const users = await userProfile.findAll();
    res.send(users);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getAllUserById(req, res) {
  try {
    const userId = req.params.id;
    const getUser = await userProfile.findByPk(userId);
    res.send(getUser);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;
    console.log('Received user data:', user);

    const findUser = await userProfile.findOne({ where: { email: user.email } });
    if (findUser) {
      console.log('User already exists:', findUser);
      return res.status(409).send({ error: '409', message: 'User already exists' });
    }

    if (!user.password) {
      console.log('Password is missing');
      throw new Error('Password is missing');
    }

    const hashPassword = await bcrypt.hash(user.password, 10);

    const newUser = await userProfile.create({
      username: user.username,
      password: hashPassword,
      email: user.email,
      profilePicture: user.profilePicture || null,
      name: user.name || null,
      surname: user.surname || null,
      intro: user.intro || null,
    });

    console.log('Created new user:', newUser);

    const accessToken = jwt.sign({ id: newUser.id }, tokenTEST);
    console.log('Generated access token:', accessToken);
    res.cookie('jwt', accessToken, {httpOnly: true, secure: true, SameSite: 'strict', expires: new Date(Number(new Date()) + 30*60*1000)})
  
    res.status(201).send({ accessToken });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).send({ error: error.message, message: 'Could not create user' });
  }
}



async function logUser (req, res) {
  const login = req.body;
  // console.log('received user data', login)
  try {
    const user = await userProfile.findOne({ where: { email: login.email } });
    // console.log('user in database', user)
    const validatedPass = await bcrypt.compare(login.password, user.password);
    console.log('password matchs', validatedPass)

    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ id: user.id }, tokenTEST);
    // console.log('Generated access token:', accessToken);
    res.cookie('jwt', accessToken, {httpOnly: true, secure: true, SameSite: 'strict', expires: new Date(Number(new Date()) + 30*60*1000)});
    // res.json({id: user.id})
    res.status(200).send({accessToken})
    } catch (error) {
      res
        .status(401)
        .send({ error: '401', message: 'Username or password is incorrect' });
    }
};




async function updateUser(req, res) {
  try {
    //TODO: logic here
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    await userProfile.destroy({
      where: {
        id: userId,
      },
    });
    res.status(200).send('User Deleted');
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getAllUserPhoto(req, res) {
  const id = req.params.id;
  try {
    const userPhotos = await userProfile.findOne({
      include: [
        {
          model: photosDb,
          as: 'photo',
        },
      ],
      where: { id: id },
      order: [['photo', 'createdAt', 'DESC']],
    });
    res.send(userPhotos);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  logUser,
  getAllUserById,
  updateUser,
  deleteUser,
  getAllUserPhoto,
};
