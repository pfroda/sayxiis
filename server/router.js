const express = require('express');
const router = express.Router();
const photoController = require('./controllers/photoController');
const userController = require('./controllers/userProfileController');
const tagController = require('./controllers/tagController');
const photosTagsController = require('./controllers/photoTagController');
const verifyToken = require('./middleware/authJwt');


// Photo Router
router.get('/photos', verifyToken, photoController.getAllPhotos);
router.get('/photos/:id', verifyToken, photoController.getPhotoById);
router.post('/photos', verifyToken, photoController.addPhoto);
router.delete('/photos/:id', verifyToken, photoController.deletePhoto);
router.put('/photos/:id/vote', verifyToken, photoController.votePhoto); //Need to update this!
router.put('/photos/:id/sticker', verifyToken, photoController.winSticker);
router.post('/photos/withtag', verifyToken, photoController.addPhotoWithTag);

// User Router
router.get('/users', verifyToken, userController.getAllUsers);
router.get('/users/photos/:id', verifyToken, userController.getAllUserPhoto);
router.get('/users/:id', verifyToken, userController.getUserById);
router.post('/users/signup', userController.createUser);
router.post('/users/signin', userController.logUser)
router.put('/users/:id', verifyToken, userController.updateUser);
router.delete('/users/:id', verifyToken, userController.deleteUser);

// Tag Router
router.get('/tags', verifyToken, tagController.getAllTags);
router.get('/tags/:id', verifyToken, tagController.getTagById);
router.post('/tags', verifyToken, tagController.addTag);
router.delete('/tags/:id', verifyToken, tagController.deleteTag);
router.get('/tags/photos/:id', verifyToken, tagController.getAllTagsPhoto);
router.put('/tags/:id/vote', verifyToken, tagController.votePhoto);

// Middle Photo - tag Router
router.get('/photosTags', verifyToken, photosTagsController.getAllTagsByPhotos);
router.get('/photosTags/:id', verifyToken, photosTagsController.getPhotosByTag);
router.put('/photosTags/:id/vote', verifyToken, photosTagsController.votePhotoByTag);

module.exports = router;
