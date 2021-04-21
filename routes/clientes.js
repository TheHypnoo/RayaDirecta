var express = require("express");
var router = express.Router();

router.get("/login", (req, res) => {
  res.render("clientes");
});

router.post("/login", (req, res) => {
  const user = req.body.nif;
  const pass = req.body.pass;

  user == "12345678A" && pass == "user1234"
    ? res.render("home")
    : res.render("clientes", {
        error: true,
      });
});

module.exports = router;
