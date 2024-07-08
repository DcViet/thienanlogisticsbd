"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        titleintro_vi: "Sứ mệnh của Thiên Ân Logistics",
        titleintro_en: "Mission of Thien An Logistics",
        titleintro_cn: "天安物流的使命",
        descriptionintro_vi: "Cung cấp các giải pháp logistics giúp Khách hàng xuất nhập khẩu dễ dàng, hiệu quả và an toàn:",
        descriptionintro_en: "Providing logistics solutions to help customers export and import easily, efficiently and safely:",
        descriptionintro_cn: "提供物流解决方案，帮助客户轻松、高效、安全地进出口:",
        contentintro_vi: "__ được thành lập vào ngày ___, có tên đầy đủ là Công ty TNHH ___. Với nhiều năm kinh nghiệm trong lĩnh vực xuất nhập khẩu, ___ đã từng bước khẳng định vị thế bằng việc tham gia các hiệp hội và cung cấp các giải pháp logistics giúp Khách hàng xuất nhập khẩu dễ dàng, hiệu quả và an toàn.",
        contentintro_en: "___ was established on ___, with the full name as ___. With many years of experience in the field of import and export, ___ has gradually asserted its position by participating in associations and providing logistics solutions to help customers export and import easily, efficiently and safely.",
        contentintro_cn: "___成立于___，全称为___. 多年来在进出口领域积累了丰富经验，通过参与协会并提供物流解决方案，帮助客户轻松、高效、安全地进出口.",
        serviceintro1_vi:
          'Đơn giản hóa dịch vụ xuất nhập khẩu trong giao nhận hàng hóa quốc tế.',
        serviceintro1_en:
          "Simplify import and export services in international freight forwarding.",
        serviceintro1_cn:
          "简化国际货运代理中的进出口服务。",
        serviceintro2_vi:
          'Tối ưu dịch vụ hậu cần để mang đến cho Khách hàng các giải pháp tiết kiệm.',
        serviceintro2_en:
          "Optimize logistics services to bring cost-saving solutions to customers.",
        serviceintro2_cn:
          "优化物流服务，为客户提供节省成本的解决方案。",
        serviceintro3_vi:
          'Xây dựng giải pháp bằng những sự đổi mới trong việc cập nhật tin tức xuất nhập khẩu, ứng dụng công nghệ thông tin.',
        serviceintro3_en:
          "Develop solutions through innovations in updating import and export news, applying information technology.",
        serviceintro3_cn:
          "通过更新进出口新闻、应用信息技术的创新来开发解决方案.",
        subcontentintro_vi: "Trở thành trung tâm dịch vụ hậu cần của Việt Nam, bằng việc đầu tư phương tiện vận tải, kho bãi chứa hàng, phát triển hệ thống văn phòng tại Việt Nam và vươn ra Châu lục.",
        subcontentintro_en: "Become the logistics service center of Vietnam, by investing in transportation, warehouses, developing office systems in Vietnam and expanding to the continent.",
        subcontentintro_cn: "通过投资运输工具、仓库，在越南发展办公系统，并扩展到大陆，成为越南的物流服务中心.",
        createdAt: Sequelize.literal("NOW()"),
        updatedAt: Sequelize.literal("NOW()")
      },
    ];

    await queryInterface.bulkInsert("AboutIntros", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AboutIntros", null, {});
  },
};
