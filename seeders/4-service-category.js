"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name: "Dịch vụ đại lý hải quan",
      },
      {
        name: "Dịch vụ xuất nhập khẩu các loại hàng hoá",
      },
      {
        name: "Dịch vụ vận tải đường bộ, đường thuỷ",
      },
      {
        name: "Dịch vụ xếp dỡ hàng hoá tại kho, cảng",
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
