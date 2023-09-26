module.exports = (sequelize, DataTypes) => {
  const PhotoTag = sequelize.define('PhotosTags', {
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return PhotoTag;
};
