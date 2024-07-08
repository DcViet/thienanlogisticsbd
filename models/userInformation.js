"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserInformation extends Model {
    static associate(models) {
      // define association here
      UserInformation.belongsTo(models.ServiceCategory, { foreignKey: 'serviceCategoryId' });
    }
  }
  UserInformation.init(
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serviceCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ServiceCategories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      modelName: "UserInformation",
    }
  );
  return UserInformation;
};
