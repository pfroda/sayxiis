const { DataTypes } = require('sequelize');
const sequelize = require('./connectionDB');

const Photos = sequelize.define('photosdb', {
  ownerId: {
    type: DataTypes.INTEGER,
  },
  vote: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  photoUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Photos;
