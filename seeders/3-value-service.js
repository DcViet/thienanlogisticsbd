"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let items = [
            {
              title_vi: "Tối ưu hoá chi phí",
              title_en: "Cost Optimization",
              title_cn: "成本优化",
              message_vi: "Mang đến cho Khách hàng các giải pháp tiết kiệm chi phí trong quá trình thông quan hàng hóa.",
              message_en: "Providing customers with cost-saving solutions during the customs clearance process.",
              message_cn: "在货物清关过程中为客户提供节约成本的解决方案。",
              valueid: 1,
            },
            {
              title_vi: "Tiết kiệm thời gian",
              title_en: "Time Saving",
              title_cn: "节省时间",
              message_vi: "Xử lý nhanh chóng các thủ tục hải quan hàng xuất nhập khẩu, đảm bảo tính đầy đủ, chính xác và hợp pháp.",
              message_en: "Quickly handling customs procedures for import and export goods, ensuring completeness, accuracy, and legality.",
              message_cn: "快速处理进出口货物的海关手续，确保完整性、准确性和合法性。",
              valueid: 2,
            },
            {
              title_vi: "Đơn giản hoá dịch vụ",
              title_en: "Service Simplification",
              title_cn: "服务简化",
              message_vi: "Đơn giản hóa quy trình và giảm thiểu phức tạp trong việc vận chuyển hàng hóa giữa các quốc gia.",
              message_en: "Simplifying procedures and reducing complexity in transporting goods between countries.",
              message_cn: "简化程序并减少在各国之间运输货物的复杂性。",
              valueid: 3,
            },
            {
              title_vi: "Dịch vụ chuyên nghiệp",
              title_en: "Professional Service",
              title_cn: "专业服务",
              message_vi: "Đội ngũ nhân viên giàu kinh nghiệm luôn sẵn sàng tư vấn và giải đáp những thắc mắc của khách hàng kịp thời.",
              message_en: "Experienced staff ready to provide timely advice and address customer queries.",
              message_cn: "经验丰富的员工随时准备提供及时的建议并解答客户的疑问。",
              valueid: 4,
            },
            {
              title_vi: "Giảm thiểu rủi ro thương mại",
              title_en: "Minimizing Trade Risks",
              title_cn: "减少贸易风险",
              message_vi: "___ luôn đề cao các tiêu chí Dễ dàng - Hiệu quả - An toàn xuyên suốt quá trình xuất nhập khẩu hàng hóa.",
              message_en: "___ always upholds the criteria of Ease - Efficiency - Safety throughout the import-export process.",
              message_cn: "___始终在进出口过程中坚持易用性、效率和安全性的标准。",
              valueid: 5,
            },
            {
              title_vi: "Mạng lưới kết nối đa dạng",
              title_en: "Diverse Networking",
              title_cn: "多样化的网络连接",
              message_vi: "Với hơn 300 Agent từ 168 quốc gia khác nhau. Giúp cập nhật thông tin mới nhất về thị trường & quy định xuất nhập khẩu của từng quốc gia.",
              message_en: "With over 300 Agents from 168 different countries. Helping to update the latest information on market & import-export regulations of each country.",
              message_cn: "拥有来自168个不同国家的300多名代理。帮助更新每个国家的市场和进出口法规的最新信息。",
              valueid: 6,
            }
          ];
          
        items.forEach((item) => {
            item.createdAt = Sequelize.literal("NOW()");
            item.updatedAt = Sequelize.literal("NOW()");
        });

        await queryInterface.bulkInsert("ValueServices", items, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("ValueServices", null, {});
    },
};
