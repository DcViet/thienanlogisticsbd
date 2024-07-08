"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name_vi: "Dịch vụ đại lý hải quan",
        name_en: "Customs brokerage services",
        name_cn: "海关代理服务"
      },
      {
        name_vi: "Dịch vụ xuất nhập khẩu các loại hàng hoá",
        name_en: "Import and export services for various goods",
        name_cn: "各种货物的进出口服务"
      },
      {
        name_vi: "Dịch vụ vận tải đường bộ, đường thuỷ",
        name_en: "Road and waterway transportation services",
        name_cn: "公路和水路运输服务"
      },
      {
        name_vi: "Dịch vụ xếp dỡ hàng hoá tại kho, cảng",
        name_en: "Cargo handling services at warehouses and ports",
        name_cn: "仓库和港口的货物装卸服务"
      }
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("ServiceCategories", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ServiceCategories", null, {});
  },
};
