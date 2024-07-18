const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://res.cloudinary.com/djd7b0upe/image/upload/v1721331531/link-tree-clon/profile%20pictures/user_default.webp",
      },
      theme: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "original",
      },
    },
    {
      timestamps: false,
    }
  );
};
