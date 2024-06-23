"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name: "Mr. Ly",
        email: 'thienanlogisticsbd@gmail.com',
        userid: 1,
      },
      {
        name: "Ms abc",
        email: 'thienanlogisticsbd@gmail.com',
        userid: 1,
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
