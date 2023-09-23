const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const PORT = 3001;
(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🎉`);
    });
  } catch (error) {
    console.log('Error', error);
  }
})();
