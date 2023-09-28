const db = require('../models/connectionDB');
const userProfile = db.userProfile;
const photosDb = db.photo;
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

async function addUser(req, res) {
  try {
    const user = req.body;
    const hashPassword = await bcrypt.hash(user.password, 10);

    const newUser = await userProfile.create({
      username: user.username,
      password: hashPassword,
      email: user.email,
      profilePicture: user.profilePicture || null,
      name: user.name || null,
      surname: user.surname || null,
      intro:user.intro || null
    });
    res.send(newUser);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

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
  addUser,
  getAllUserById,
  updateUser,
  deleteUser,
  getAllUserPhoto,
};
