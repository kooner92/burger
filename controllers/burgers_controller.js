var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burgers.create(["burger_name"], 
  [
    req.body.burger_name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.update({
    devoured: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;