const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    var hbsObject = {
      burger: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  burger.create("burger_name", req.body.burger_name, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {
  const burgerId = req.params.id;

  burger.update(burgerId, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
