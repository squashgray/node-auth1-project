const express = require("express");

const users = require("./user-model");

const router = express.Router();

router.get("/", (req, res) => {
  users
    .findUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "didn't work" });
    });
});

module.exports = router;
