const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const profileDb = require('./models/userProfileSchema');
const photosDb = require('./models/photoSchema');

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const PORT = 3001;
(async () => {
  try {
    //TODO: Refactor this part
    await photosDb.sync();
    await profileDb.sync();
    console.log('DB Connected 📚');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🎉`);
    });
  } catch (error) {
    console.log('Error', error);
  }
})();
