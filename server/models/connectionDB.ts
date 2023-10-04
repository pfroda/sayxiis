import * as dotenv from 'dotenv';
import { Sequelize, DataTypes, Dialect } from 'sequelize';
import photoSchema from './photoSchema';
import photoTag from './photoTag';
import tag from './tag';
import userProfileSchema from './userProfileSchema';

dotenv.config();

if (!process.env.DB_DIALECT) {
  throw new Error('DB_DIALECT environment variable is not defined');
}

const dialect: Dialect = process.env.DB_DIALECT as Dialect;

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    dialect: dialect,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    logging: false,
  }
);

const db: any = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.userProfile = userProfileSchema(sequelize);
db.photo = photoSchema(sequelize);
db.tags = tag(sequelize);
db.photoTag = photoTag(sequelize);

// Associations Tables

// 1 to many relation
db.userProfile.hasMany(db.photo, {
  foreignKey: 'userId',
  as: 'photo',
});

db.photo.belongsTo(db.userProfile, {
  foreignKey: 'userId',
  as: 'user',
});

db.tags.belongsToMany(db.photo, {
  through: db.photoTag,
});

db.photo.belongsToMany(db.tags, {
  through: db.photoTag,
});

db.sequelize.sync({ force: false }).then(() => {
  console.log('Well done Cintia! Re-sync done on DB 📑!');
});

export default db;
