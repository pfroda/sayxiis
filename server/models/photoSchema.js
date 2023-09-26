module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('Photos', {
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    winSticker: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Photos;
};
