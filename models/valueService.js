"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ValueService extends Model {
    static associate(models) {
      // define association here
    }
  }
  ValueService.init(
    {
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
      message_vi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      message_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      message_cn: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      valueid: {
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
      modelName: "ValueService",
    }
  );
  return ValueService;
};
