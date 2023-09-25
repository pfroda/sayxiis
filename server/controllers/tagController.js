const db = require('../models/connectionDB');
const tagsDb = db.tags;

async function getAllTags(req, res) {
  try {
    const tags = await tagsDb.findAll({});
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
    const getTag = await tagsDb.findByPk(tagId);
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
    const newTag = await tagsDb.create(tag);
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
    await tagsDb.destroy({
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
    const photoTag = await userProfile.findOne({
      include: [
        {
          model: tagsDb,
          as: 'photo',
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

module.exports = {
  getAllTags,
  getTagById,
  addTag,
  deleteTag,
  getAllTagsPhoto,
};
