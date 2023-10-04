import db from '../models/connectionDB';
const tagsModel = db.tags;
const photoTagsModel = db.photoTag;
const photosDb = db.photo;

async function getAllTags(req, res) {
  try {
    const tags = await tagsModel.findAll({
      // include: { model: photosDb },
    });
    res.send(tags);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getTagById(req, res) {
  try {
    const tagId = req.params.id;
    const getTag = await tagsModel.findByPk(tagId, {
      include: { model: photosDb },
    });
    res.send(getTag);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function addTag(req, res) {
  try {
    const tag = req.body;
    const newTag = await tagsModel.create(tag);
    res.send(newTag);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function deleteTag(req, res) {
  try {
    const tagId = req.params.id;
    await tagsModel.destroy({
      where: {
        id: tagId,
      },
    });
    res.status(200).send('Tag Deleted');
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function getAllTagsPhoto(req, res) {
  const id = req.params.id;
  try {
    const photoTag = await tagsModel.findOne({
      include: [
        {
          model: photosDb,
        },
      ],
      where: { id: id },
    });
    res.send(photoTag);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

async function votePhoto(req, res) {
  try {
    const photoId = req.params.id;
    const votePhoto = await photoTagsModel.findByPk(photoId);
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

export default {
  getAllTags,
  getTagById,
  addTag,
  deleteTag,
  getAllTagsPhoto,
  votePhoto,
};
