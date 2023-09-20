const photosDb = require('../models/photoSchema');

async function getAllPhotos(req, res) {
  try {
    res.send('Hello World From Controller ');
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function addPhoto(req, res) {
  try {
    res.send('Hello World From Controller ');
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = { getAllPhotos, addPhoto };
