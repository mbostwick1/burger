const connection = require("./connection");

const orm = {
  all: (table, cb) => {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, column, value, cb) => {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, column, value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  update: (table, column, burgerId, cb) => {
    const queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
    connection.query(queryString, [table, column, burgerId], (err, res) => {
      console.log("update" + queryString);
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;