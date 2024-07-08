'use strict';
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    static associate(models) {
      PostCategory.hasMany(models.BlogPost, { foreignKey: 'postCategoryId' });
    }
  }

  PostCategory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name_vi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name_cn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "PostCategory",
    }
  );

  return PostCategory;
};
