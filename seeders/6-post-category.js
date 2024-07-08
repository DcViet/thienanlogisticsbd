"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        id: 1,
        name_vi: "Thông báo",
        name_en: "Announcement",
        name_cn: "公告",
      },
      {
        id: 2,
        name_vi: "Kiến thức",
        name_en: "Knowledge",
        name_cn: "知识",
      },
    ];
    
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("PostCategories", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PostCategories", null, {});
  },
};


