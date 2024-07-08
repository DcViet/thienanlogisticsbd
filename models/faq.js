"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    static associate(models) {
      // define association here
    }
  }
  Faq.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question_vi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_cn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer_vi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer_cn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      faqid: {
        type: DataTypes.INTEGER,
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
      modelName: "Faq",
    }
  );
  return Faq;
};
