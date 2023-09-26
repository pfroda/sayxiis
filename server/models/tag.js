module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sticker: {
      type: DataTypes.STRING,
      defaultValue: '⭐',
    },
  });
  return Tags;
};
