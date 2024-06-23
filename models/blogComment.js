"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BlogComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BlogComment.belongsTo(models.Blog, { foreignKey: "blogId" });
    }
  }
  BlogComment.init(
    {
      author: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BlogComment",
    }
  );
  return BlogComment;
};
