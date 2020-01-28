const express = require("express");
const restricted = require("../middleware/restricted-middleware");
const users = require("./user-model");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  users
    .findUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
