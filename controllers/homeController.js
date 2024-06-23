const models = require('../models');

const controller = {};

controller.showHome = async (req, res) => {
    res.render("home");
};


module.exports = controller;