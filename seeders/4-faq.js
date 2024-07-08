"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        question_vi: "Lần đầu làm thủ tục hải quan thì làm những gì?",
        question_en: "What should I do the first time I go through customs procedures?",
        question_cn: "第一次办理海关手续应该做什么？",
        answer_vi: "Bạn cần chuẩn bị đăng ký kinh doanh, chữ ký số, xin giấy phép xuất nhập khẩu (nếu hàng hóa phải xin phép), khai tờ khai, chuẩn bị bộ hồ sơ... Vui lòng liên hệ với chúng tôi.",
        answer_en: "You need to prepare a business registration, digital signature, apply for an import-export license (if required), fill out the declaration form, prepare the dossier... Please contact us.",
        answer_cn: "您需要准备营业执照、数字签名、申请进出口许可证（如果需要）、填写申报表、准备文件... 请联系我们。",
        faqid: 1,
      },
      {
        question_vi: "Công ty có tư vấn cho khách hàng mới không?",
        question_en: "Does the company provide consulting for new customers?",
        question_cn: "公司是否为新客户提供咨询服务？",
        answer_vi: "Chúng tôi có nhiều kinh nghiệm hợp tác và tư vấn cho khách hàng mới lần đầu xuất nhập khẩu. Tùy trường hợp sẽ có hỗ trợ cụ thể.",
        answer_en: "We have extensive experience in cooperating and consulting for new customers doing import-export for the first time. Depending on the case, there will be specific support.",
        answer_cn: "我们在与第一次进行进出口的新客户合作和咨询方面有丰富的经验。 根据具体情况会有具体支持。",
        faqid: 2,
      },
      {
        question_vi: "Muốn hẹn gặp để trao đổi cụ thể thì làm thế nào?",
        question_en: "How can I make an appointment for a detailed discussion?",
        question_cn: "如何预约详细讨论？",
        answer_vi: "Vui lòng liên hệ với chúng tôi qua số hotline hoặc email hoặc Facebook fanpage để chúng tôi có thể phục vụ tốt hơn.",
        answer_en: "Please contact us via hotline, email, or Facebook fanpage so that we can serve you better.",
        answer_cn: "请通过热线电话、电子邮件或Facebook主页联系我们，以便我们更好地为您服务。",
        faqid: 3,
      },
      {
        question_vi: "Thời gian Thiên Ân Logistics làm thủ tục hải quan mất bao lâu?",
        question_en: "How long does it take Thiên Ân Logistics to complete customs procedures?",
        question_cn: "天恩物流办理海关手续需要多长时间？",
        answer_vi: "Tùy theo mặt hàng, và loại hình, thời gian thông thường trong khoảng 1-2 ngày làm việc.",
        answer_en: "Depending on the goods and type, the usual time is around 1-2 working days.",
        answer_cn: "根据货物和类型，通常需要1-2个工作日。",
        faqid: 4,
      }
    ];
    
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("Faqs", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Faqs", null, {});
  },
};
