const express = require('express');
const router = express.Router();
const photoController = require('./controllers/photoController');
const userController = require('./controllers/userProfileController');
const tagController = require('./controllers/tagController');
const photosTagsController = require('./controllers/photoTagController');

// Photo Router
router.get('/photos', photoController.getAllPhotos);
router.get('/photos/:id', photoController.getPhotoById);
router.post('/photos', photoController.addPhoto);
router.delete('/photos/:id', photoController.deletePhoto);
router.put('/photos/:id/vote', photoController.votePhoto); //Need to update this!
router.put('/photos/:id/sticker', photoController.winSticker);
router.post('/photos/withtag', photoController.addPhotoWithTag);

// User Router
router.get('/users', userController.getAllUsers);
router.get('/users/photos/:id', userController.getAllUserPhoto);
router.get('/users/:id', userController.getAllUserById);
router.post('/users', userController.addUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Tag Router
router.get('/tags', tagController.getAllTags);
router.get('/tags/:id', tagController.getTagById);
router.post('/tags', tagController.addTag);
router.delete('/tags/:id', tagController.deleteTag);
router.get('/tags/photos/:id', tagController.getAllTagsPhoto);
router.put('/tags/:id/vote', tagController.votePhoto);

// Middle Photo - tag Router
router.get('/photosTags', photosTagsController.getAllTagsByPhotos);
router.get('/photosTags/:id', photosTagsController.getPhotosByTag);
router.put('/photosTags/:id/vote', photosTagsController.votePhotoByTag);

module.exports = router;
