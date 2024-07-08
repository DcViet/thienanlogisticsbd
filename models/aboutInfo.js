"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AboutIntro extends Model {
    static associate(models) {
      // define association here
    }
  }
  AboutIntro.init(
    {
      titleintro_vi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      titleintro_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      titleintro_cn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descriptionintro_vi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descriptionintro_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descriptionintro_cn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentintro_vi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentintro_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contentintro_cn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      serviceintro1_vi: {
        type: DataTypes.TEXT,
      },
      serviceintro1_en: {
        type: DataTypes.TEXT,
      },
      serviceintro1_cn: {
        type: DataTypes.TEXT,
      },
      serviceintro2_vi: {
        type: DataTypes.TEXT,
      },
      serviceintro2_en: {
        type: DataTypes.TEXT,
      },
      serviceintro2_cn: {
        type: DataTypes.TEXT,
      },
      serviceintro3_vi: {
        type: DataTypes.TEXT,
      },
      serviceintro3_en: {
        type: DataTypes.TEXT,
      },
      serviceintro3_cn: {
        type: DataTypes.TEXT,
      },
      subcontentintro_vi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      subcontentintro_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      subcontentintro_cn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "AboutIntro",
    }
  );
  return AboutIntro;
};
