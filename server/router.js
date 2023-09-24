const express = require('express');
const router = express.Router();
const photoController = require('./controllers/photoController');
const userController = require('./controllers/userProfileController');

// Photo Router
router.get('/photos', photoController.getAllPhotos);
router.get('/photos/:id', photoController.getPhotoById);
router.post('/photos', photoController.addPhoto);
router.delete('/photos/:id', photoController.deletePhoto);
router.put('/photos/:id/vote', photoController.votePhoto);
router.put('/photos/:id/sticker', photoController.winSticker);

// User Router
router.get('/users', userController.getAllUsers);
router.get('/users/photos/:id', userController.getAllUserPhoto);
router.get('/users/:id', userController.getAllUserById);
router.post('/users', userController.addUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
