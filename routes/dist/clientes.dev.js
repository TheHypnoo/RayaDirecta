"use strict";

var express = require("express");

var router = express.Router();
router.get("/login", function (req, res) {
  res.render("clientes");
});
router.post("/login", function (req, res) {
  var user = req.body.nif;
  var pass = req.body.pass;
  user == "12345678A" && pass == "user1234" ? res.render("home") : res.render("clientes", {
    error: true
  });
});
module.exports = router;