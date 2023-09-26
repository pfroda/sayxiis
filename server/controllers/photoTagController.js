const db = require('../models/connectionDB');
const photoTagsModel = db.photoTag;
const photosDb = db.photo;
const Tag = db.tags;

async function getAllTagsByPhotos(req, res) {
  try {
    const tags = await photoTagsModel.findAll({});
    res.send(tags);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getPhotosByTag(req, res) {
  const id = req.params.id;
  try {
    const tagPhotos = await Tag.findOne({
      where: { id: id },
      include: { model: photosDb },
    });
    res.send(tagPhotos);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getTagById(req, res) {
  try {
    const tagId = req.params.id;
    const getTag = await photoTagsModel.findByPk(tagId);
    res.send(getTag);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function votePhotoByTag(req, res) {
  try {
    const photoId = req.params.id;
    const votePhoto = await photoTagsModel.findOne({
      where: {
        photoId: photoId,
        tagId: 1,
      },
    });
    if (votePhoto) {
      votePhoto.votes = votePhoto.votes + 1;
      await votePhoto.save();
      res.status(200).send('1 vote more!');
    } else {
      res.status(404).send('Photo not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  getAllTagsByPhotos,
  getTagById,
  votePhotoByTag,
  getPhotosByTag,
};
