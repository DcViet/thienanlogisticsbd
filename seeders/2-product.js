"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        name: "magna vestibulum aliquet",
        imagePath: "/img/product/p1.jpg",
        oldPrice: 65.67,
        price: 17.49,
        summary:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        categoryId: 4,
      },
      {
        name: "nisi volutpat",
        imagePath: "/img/product/p2.jpg",
        oldPrice: 36.79,
        price: 77.31,
        summary:
          "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        categoryId: 2,
      },
      {
        name: "maecenas pulvinar lobortis",
        imagePath: "/img/product/p3.jpg",
        oldPrice: 62.02,
        price: 53.06,
        summary:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        categoryId: 1,
      },
      {
        name: "consequat lectus in",
        imagePath: "/img/product/p4.jpg",
        oldPrice: 82.76,
        price: 19.87,
        summary:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        categoryId: 4,
      },
      {
        name: "id ligula suspendisse",
        imagePath: "/img/product/p5.jpg",
        oldPrice: 60.9,
        price: 12.97,
        summary:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        categoryId: 4,
      },
      {
        name: "ultrices mattis",
        imagePath: "/img/product/p6.jpg",
        oldPrice: 26.87,
        price: 30.32,
        summary:
          "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",

        categoryId: 3,
      },
      {
        name: "luctus ultricies",
        imagePath: "/img/product/p7.jpg",
        oldPrice: 38.7,
        price: 4.58,
        summary:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        categoryId: 1,
      },
      {
        name: "aliquam non",
        imagePath: "/img/product/p8.jpg",
        oldPrice: 96.87,
        price: 48.95,
        summary:
          "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        categoryId: 1,
      },
    ];
    items.forEach((item) => {
      item.createdAt = getRamdomDateInBetween("2021-01-01", "2024-05-30");
      item.updatedAt = item.createdAt;
    });
    await queryInterface.bulkInsert("Products", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};

function getRamdomDateInBetween(start, end) {
  start = Date.parse(start);
  end = Date.parse(end);

  return new Date(Math.floor(Math.random() * (end - start + 1) + start));
}
