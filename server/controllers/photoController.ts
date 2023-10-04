import db from '../models/connectionDB';
const photosDb = db.photo;
const tagsModel = db.tags;

async function getAllPhotos(req, res) {
  try {
    const users = await photosDb.findAll({
      order: [['createdAt', 'DESC']],
      include: { model: tagsModel },
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

async function addPhotoWithTag(req, res) {
  try {
    const photo = req.body;
    const newPhoto = await photosDb.create(photo);
    const tag = await db.tags.findByPk(photo.tagId);
    await newPhoto.setTags([tag]);
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

//I put this on tagController
async function votePhoto(req, res) {
  try {
    const photoId = req.params.id;
    const votePhoto = await photosDb.findByPk(photoId);
    if (votePhoto) {
      votePhoto.vote = votePhoto.vote + 1;
      await votePhoto.save();
      // TODO: return json
      res.status(200).send('1 vote more!');
    } else {
      res.status(404).send('Photo not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

async function winSticker(req, res) {
  try {
    const photoId = req.params.id;
    const winPhoto = await photosDb.findByPk(photoId);
    if (winPhoto) {
      winPhoto.winSticker = true;
      await winPhoto.save();
      res.status(200).send('Now this photo has a win sticker');
    } else {
      res.status(404).send('Photo not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

export default {
  winSticker,
  votePhoto,
  getAllPhotos,
  addPhoto,
  deletePhoto,
  getPhotoById,
  addPhotoWithTag,
};
