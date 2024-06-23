"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        message:
          "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        productId: 2,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",

        productId: 2,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",

        productId: 7,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",

        productId: 2,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",

        productId: 5,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",

        productId: 1,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        productId: 2,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",

        productId: 5,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",

        productId: 2,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",

        productId: 4,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",

        productId: 2,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",

        productId: 5,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",

        productId: 5,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",

        productId: 2,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",

        productId: 6,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",

        productId: 5,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",

        productId: 8,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",

        productId: 4,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",

        productId: 3,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",

        productId: 2,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",

        productId: 1,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",

        productId: 7,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",

        productId: 6,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",

        productId: 6,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",

        productId: 3,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",

        productId: 8,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",

        productId: 1,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",

        productId: 3,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",

        productId: 3,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",

        productId: 1,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",

        productId: 3,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",

        productId: 8,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",

        productId: 8,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",

        productId: 2,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",

        productId: 7,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",

        productId: 1,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",

        productId: 2,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message: "Quisque ut erat. Curabitur gravida nisi at nibh.",

        productId: 8,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",

        productId: 4,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message: "Nulla mollis molestie lorem. Quisque ut erat.",

        productId: 6,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",

        productId: 1,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",

        productId: 7,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",

        productId: 1,
        author: "Michael Lawson",
        avatar: "/img/blog/c1.jpg",
      },
      {
        message:
          "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",

        productId: 8,
        author: "Lindsay Ferguson",
        avatar: "/img/blog/c2.jpg",
      },
      {
        message:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",

        productId: 2,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",

        productId: 4,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
      {
        message:
          "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",

        productId: 4,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",

        productId: 2,
        author: "Tobias Funke",
        avatar: "/img/blog/c3.jpg",
      },
      {
        message:
          "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",

        productId: 1,
        author: "Byron Fields",
        avatar: "/img/blog/c5.jpg",
      },
      {
        message:
          "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",

        productId: 5,
        author: "Byron Fields",
        avatar: "/img/blog/c4.jpg",
      },
    ];
    items.forEach((item) => {
      item.createdAt = getRamdomDateInBetween("2021-01-01", "2024-05-30");
      item.updatedAt = item.createdAt;
    });
    await queryInterface.bulkInsert("ProductComments", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductComments", null, {});
  },
};

function getRamdomDateInBetween(start, end) {
  start = Date.parse(start);
  end = Date.parse(end);

  return new Date(Math.floor(Math.random() * (end - start + 1) + start));
}
