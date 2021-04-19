var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  const polizas = [
    "P12345678",
    "P12312312",
    "P87654321",
    "P98984321",
    "P74532276",
  ];
  res.render("polizas", { items: polizas });
});

router.get("/:id(P[0-9]{8})", (req, res) => {
  res.render("poliza", { id: req.params.id });
});

module.exports = router;
