# Sayxiis

Sayxiis is an app for those who love photography and are tired of ads. You can post your favorite photos on your profile, view photos from other users, and participate in our daily contest. Every day, a random topic is selected, and users can vote for their favorite photo to determine the best picture of the day: the winner receives a sticker to display in their profile. Thanks to Sayxiis, there are no more ads – just people sharing their passion for photography!

<img src="https://i.imgur.com/yLyWuj3.png" alt="Sayxiis website">

## Getting started:
1. Clone the repo:

   ```bash
      git clone https://github.com/pfroda/sayxiis
      cd sayxiis
    ```
2. To run the app, you’ll need Cloudinary and Unsplash accounts and must add their respective API keys to your .env file. To obtain the Cloudinary API key:

   - After creating your account, navigate to Settings (bottom left corner).
   - Click on the "Access Keys" section to find your API Key.
3. Create a .env file in your server’s root folder and set the required variables::
   ```env
      DB_NAME=sayxdb - the database name need be this one
      DB_USER=your postgres username
      DB_PASSWORD=your password
      DB_HOST=your host
      DB_DIALECT=postgres
      DB_PORT=5432

      VITE_APP_CLOUD_KEY=your key from Cloudinary
      VITE_APP_API_KEY=your key from Unsplash
   ```
4. Create a .env file in your client’s root folder and set the variables:

   ```env
      VITE_APP_URL=your server URL
   ```
5. Install the dependencies and run the server:

   ```bash
      cd server && npm install
      npm run start:dev
    ```
6. Install the dependencies and run the client:

   ```bash
      cd client && npm install
      npm run dev
    ```

## Tech stack:

Sayxiis is built with React.js for the frontend framework, React Context for state management, TypeScript language, Vite as the build tool, Vanilla CSS for styling, Express for the backend server, and PostgreSQL with Sequelize as the ORM for the database.
## Documentations

- [Api unsplash](https://unsplash.com/developers)
- [Cloudinary](https://cloudinary.com/)


## Author:

Pau Fàbrega: [GitHub](https://github.com/pfroda/) - [Linkedin](https://www.linkedin.com/in/paufabregaroda/)<br>
Cintia Siqueira: [GitHub](https://github.com/ciisiq) - [Linkedin](https://www.linkedin.com/in/cintia-siqueira/)<br>
Xavier Fàbrega: [GitHub](https://github.com/xavierfapa/) - [Linkedin](https://www.linkedin.com/in/xavierfabregapascual/)
