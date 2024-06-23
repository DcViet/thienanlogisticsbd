"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name: "Social Life",
      },
      {
        name: "Food",
      },
      {
        name: "Politics",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("BlogCategories", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BlogCategories", null, {});
  },
};
