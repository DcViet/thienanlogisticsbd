"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        title: "6 ways to prepare breakfast for 30",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/main-blog/m-blog-1.jpg",
        summary:
          "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        categoryId: 1,
      },
      {
        title: "Visit the clean farm in the US",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/main-blog/m-blog-2.jpg",
        summary:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        categoryId: 2,
      },
      {
        title: "Cooking tips make cooking simple",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/main-blog/m-blog-3.jpg",
        summary:
          "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        categoryId: 3,
      },
      {
        title: "Crab Pool Security",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/main-blog/m-blog-4.jpg",
        summary:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        categoryId: 2,
      },
      {
        title: "The Moment You Need To Remove Garlic From The Menu",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/main-blog/m-blog-5.jpg",
        summary:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        categoryId: 1,
      },
      {
        title: "6 ways to prepare breakfast",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/main-blog/m-blog-1.jpg",
        summary:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        categoryId: 3,
      },
    ];
    items.forEach((item) => {
      item.createdAt = getRamdomDateInBetween("2021-01-01", "2024-05-30");
      item.updatedAt = item.createdAt;
    });
    await queryInterface.bulkInsert("Blogs", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Blogs", null, {});
  },
};

function getRamdomDateInBetween(start, end) {
  start = Date.parse(start);
  end = Date.parse(end);

  return new Date(Math.floor(Math.random() * (end - start + 1) + start));
}
