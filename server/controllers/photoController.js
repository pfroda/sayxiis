const db = require('../models/connectionDB');
const photosDb = db.photoSchema;

async function getAllPhotos(req, res) {
  try {
    const users = await photosDb.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.send(users);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getPhotoById(req, res) {
  try {
    const photoId = req.params.id;
    const getPhoto = await photosDb.findByPk(photoId);
    res.send(getPhoto);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function addPhoto(req, res) {
  try {
    const photo = req.body;
    const newPhoto = await photosDb.create(photo);
    res.send(newPhoto);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function deletePhoto(req, res) {
  try {
    const photoId = req.params.id;
    await photosDb.destroy({
      where: {
        id: photoId,
      },
    });
    res.status(200).send('Photo Deleted');
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = { getAllPhotos, addPhoto, deletePhoto, getPhotoById };
