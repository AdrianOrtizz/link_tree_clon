require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;
const UserModel = require("./models/User");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
  { logging: false, native: false }
);

UserModel(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
