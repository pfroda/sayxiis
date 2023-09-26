module.exports = (sequelize, DataTypes) => {
  const PhotoTag = sequelize.define('PhotosTags', {
    // photoId: {
    //   type: DataTypes.INTEGER,
    // },
    // tagId: {
    //   type: DataTypes.INTEGER,
    // },
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return PhotoTag;
};
