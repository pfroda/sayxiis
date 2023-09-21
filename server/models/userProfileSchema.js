const { DataTypes } = require('sequelize');
const sequelize = require('./connectionDB');

const Profile = sequelize.define('usersdb', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  intro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Profile;
