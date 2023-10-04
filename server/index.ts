require('dotenv').config();
import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router'
import cookieParser from 'cookie-parser';

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: process.env.CORS_CREDENTIALS === 'true',
}

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.use(express.urlencoded({ extended: true }));

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
