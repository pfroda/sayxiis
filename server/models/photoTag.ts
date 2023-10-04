import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  const PhotoTag = sequelize.define('PhotosTags', {
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return PhotoTag;
};
