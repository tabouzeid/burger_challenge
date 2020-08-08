const burger = require('../models/burger.js');
const express = require('express');

var router = express.Router();

router.get("/", function (req, res) {
    burger.getAllBurgers(function (data) {
        res.render("index", getHandlebarsData(data));
    });
});

router.post("/", function (req, res) {
    burger.addBurger(req.body.burger_name, function (data) {
        res.redirect("/");
    });
});

router.put("/", function (req, res) {
    burger.devourBurger(req.body.id, function (data) {
        res.end();
    });
});

function getHandlebarsData(data){
    let queued = data.filter((burger) => { return !burger.devoured });
    let devoured = data.filter((burger) => { return burger.devoured });
    return {
        devoured: devoured,
        queued: queued
    };
}

// Export routes for server.js to use.
module.exports = router;
