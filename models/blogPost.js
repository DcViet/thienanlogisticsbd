"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  class BlogPost extends Model {
    static associate(models) {
      BlogPost.belongsTo(models.PostCategory, { foreignKey: 'postCategoryId' });
    }
  }
  BlogPost.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title_vi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title_cn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_vi: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description_en: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description_cn: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author_vi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author_cn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary_vi: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      summary_en: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      summary_cn: {
        type: DataTypes.TEXT,
        allowNull: true,
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
      postId: {
        type: DataTypes.INTEGER,
      },
      postCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'PostCategories',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: "BlogPost",
    }
  );
  return BlogPost;
};
