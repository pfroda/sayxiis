require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

if (!process.env.DB_DIALECT) {
  throw new Error('DB_DIALECT environment variable is not defined');
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 5432, // You can add a default port here
    logging: false,
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.userProfile = require('./userProfileSchema')(sequelize, DataTypes);
db.photo = require('./photoSchema')(sequelize, DataTypes);
db.tags = require('./tag')(sequelize, DataTypes);
db.photoTag = require('./photoTag')(sequelize, DataTypes);

// Associations Tables

// 1 to many relation
db.userProfile.hasMany(db.photo, {
  foreignKey: 'userId',
  as: 'photo',
});

db.photo.belongsTo(db.userProfile, {
  foreignKey: 'userId',
  as: 'user',
});

db.tags.belongsToMany(db.photo, {
  through: db.photoTag,
});

db.photo.belongsToMany(db.tags, {
  through: db.photoTag,
});

db.sequelize.sync({ force: false }).then(() => {
  console.log('Well done Cintia! Re-sync done on DB 📑!');
});

module.exports = db;
