module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('photosdb', {
    vote: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    photoUrl: {
      type: DataTypes.STRING,
    },
    winSticker: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Photos;
};
