const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    create: function(column, value, cb) {
        orm.create("burger", column, value, function(res) {
            cb(res);
        });
    },
    update: function (burgerId, cb) {
        orm.update("burger", "devoured", burgerId, function (res) {
          cb(res);
        });
      }
};

module.exports = burger;