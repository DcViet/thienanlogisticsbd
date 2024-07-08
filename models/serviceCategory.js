"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceCategory extends Model {
    static associate(models) {
      // define association here
      ServiceCategory.hasMany(models.UserInformation, { foreignKey: 'serviceCategoryId' });
    }
  }
  ServiceCategory.init(
    {
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
      modelName: "ServiceCategory",
    }
  );
  return ServiceCategory;
};
