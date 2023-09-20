const express = require('express');
const router = express.Router();
const controller = require('./controllers/photoController');

router.get('/photos', controller.getAllPhotos);
router.get('/', function (req, res) {
  res.send('welcome from router');
});

module.exports = router;
