"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.ProductCategory, { foreignKey: "categoryId" });
      Product.hasMany(models.ProductComment, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      imagePath: DataTypes.STRING,
      price: DataTypes.FLOAT,
      oldPrice: DataTypes.FLOAT,
      summary: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
