'use strict';

const express = require('express');
const router= express.Router();
const HomeController = require('../controllers/homeController');

// router.get('/createTables', (req, res) => {
//     let models = require('../models');
//     models.sequelize.sync().then(() => {
//         res.send('tables created!');
//     });
// });

router.get('/', HomeController.showHome);

// router.get('/:id', controller.showBlogDetails);

// router.post('/:id', controller.postComment);

module.exports = router;

