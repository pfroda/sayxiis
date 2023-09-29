const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

const corsOptions = {
  origin: 'http://localhost:5173'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

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
