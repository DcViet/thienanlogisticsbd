"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        title_vi: "Thiên Ân Logistics thông báo nghỉ Tết Nguyên Đán Giáp Thìn 2024",
        title_en: "Thiên Ân Logistics Announces Tet Holiday 2024",
        title_cn: "天恩物流宣布2024年春节假期",
        description_vi: "",
        description_en: "",
        description_cn: "",
        imagePath: "/assets/img/blog/blog-1.jpg",
        author_vi: "Ông Ly",
        author_en: "Mr. Ly",
        author_cn: "李先生",
        summary_vi: "Morbi vestibulum",
        summary_en: "Morbi vestibulum",
        summary_cn: "Morbi vestibulum",
        postId: 1,
      },
      {
        title_vi: "SOC là gì trong xuất nhập khẩu? Phân biệt SOC và COC dễ hiểu",
        title_en: "What is SOC in Import and Export? Easy Distinction Between SOC and COC",
        title_cn: "进出口中的SOC是什么？SOC与COC的简单区分",
        description_vi: "",
        description_en: "",
        description_cn: "",
        imagePath: "/assets/img/blog/blog-2.jpg",
        author_vi: "Ông Ly",
        author_en: "Mr. Ly",
        author_cn: "李先生",
        summary_vi: "Morbi vestibulum",
        summary_en: "Morbi vestibulum",
        summary_cn: "Morbi vestibulum",
        postId: 2,
      },
      {
        title_vi: "CoC là gì trong xuất nhập khẩu? Phân biệt CoC với CQ",
        title_en: "What is CoC in Import and Export? Distinction Between CoC and CQ",
        title_cn: "进出口中的CoC是什么？CoC与CQ的区分",
        description_vi: "",
        description_en: "",
        description_cn: "",
        imagePath: "/assets/img/blog/blog-3.jpg",
        author_vi: "Ông Ly",
        author_en: "Mr. Ly",
        author_cn: "李先生",
        summary_vi: "Morbi vestibulum",
        summary_en: "Morbi vestibulum",
        summary_cn: "Morbi vestibulum",
        postId: 3,
      }
    ];
    
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("BlogPosts", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BlogPosts", null, {});
  },
};
