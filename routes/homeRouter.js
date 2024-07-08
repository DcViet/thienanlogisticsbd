'use strict';

const express = require('express');
const router= express.Router();
const HomeController = require('../controllers/homeController');

router.get('/createTables', (req, res) => {
    let models = require('../models');
    models.sequelize.sync().then(() => {
        res.send('tables created!');
    });
});

router.get('/dropTables', async (req, res) => {
    let models = require('../models');
    try {
        await models.sequelize.drop();
        res.send('All tables dropped!');
    } catch (error) {
        console.error("Error dropping tables:", error);
        res.status(500).send('Error dropping tables');
    }
});

router.get('/', HomeController.showHome);

router.get('/change-language', (req, res) => {
    const { lang } = req.query;
    res.cookie('locale', lang, { maxAge: 900000, httpOnly: true });
    res.redirect('back'); // Quay lại trang trước
});

// router.get('/:id', controller.showBlogDetails);

// router.post('/:id', controller.postComment);

module.exports = router;

