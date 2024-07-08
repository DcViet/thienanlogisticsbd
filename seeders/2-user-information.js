"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name_vi: "Ông Ly",
        name_en: "Mr. Ly",
        name_cn: "李先生",
        email: 'thienanlogisticsbd@gmail.com',
        userid: 1,
      },
      {
        name_vi: "Bà abc",
        name_en: "Ms abc",
        name_cn: "abc女士",
        email: 'thienanlogisticsbd@gmail.com',
        userid: 2,
      }
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("UserInformations", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserInformations", null, {});
  },
};
