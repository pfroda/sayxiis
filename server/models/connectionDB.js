require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: 5432,
    logging: false,
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.photoSchema = require('./photoSchema')(sequelize, DataTypes);
db.userProfileSchema = require('./userProfileSchema')(
  sequelize,
  Sequelize.DataTypes
);

db.sequelize.sync({ force: false, logging: console.log }).then(() => {
  console.log('Re-sync done on DB 📑!');
});

// 1 to many relation
db.userProfileSchema.hasMany(db.photoSchema, {
  foreignKey: 'userId',
  as: 'photo',
});

db.photoSchema.belongsTo(db.userProfileSchema, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = db;
