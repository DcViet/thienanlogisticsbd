"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.BlogCategory, { foreignKey: "categoryId" });
      Blog.hasMany(models.BlogComment, { foreignKey: "blogId" });
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      imagePath: DataTypes.STRING,
      summary: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
