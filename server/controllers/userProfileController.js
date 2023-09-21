const userProfile = require('../models/userProfileSchema');

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
    const getUser = await userProfile.findById(userId);
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
    const newUser = await userProfile.create(user);
    res.send('User created', newUser);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const newUser = await userProfile.create(userId);
    res.send('User created', newUser);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    const deleteUser = await userProfile.destroy({
      where: {
        id: userId,
      },
    });
    res.send(deleteUser);
    res.status(201);
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
};
