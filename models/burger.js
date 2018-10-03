var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.add("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.devour("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burgers;