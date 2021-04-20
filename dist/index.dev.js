"use strict";

var express = require("express");

var formidable = require('formidable');

require("pug");

var app = express();
var port = 80;
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"]("public"));
app.set("views", "./views");
app.set("view engine", "pug");
app.use("/partes", require("./routes/partes"));
app.use("/presupuesto", require("./routes/presupuestos"));
app.use("/polizas", require("./routes/polizas"));
app.use("/clientes", require("./routes/clientes"));
app.get("/", function (req, res) {
  res.render("home.pug");
});
app.get("/info", function (req, res) {
  res.render("info.pug");
});
app.get("*", function (req, res) {
  res.render("error.pug");
});
app.listen(port, function () {
  console.log("Start now");
});