module.exports = (sequelize, DataTypes) => {
  const tablePhotos = sequelize.define('photos', {
    ownerId: {
      type: DataTypes.NUMBER,
    },
    vote: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
    photoUrl: {
      type: DataTypes.STRING,
    },
  });
  return tablePhotos;
};
