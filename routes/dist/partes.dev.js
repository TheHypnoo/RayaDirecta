"use strict";

var express = require("express");

var _require = require("formidable"),
    formidable = _require.formidable;

var router = express.Router();
router.get("/", function (req, res, next) {
  res.render("partes");
}).post("/", function (req, res, next) {
  var form = formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {});
  on("fileBegin", function (name, file) {
    file.path = "./files/" + file.name;
  });
  on("file", function (name, file) {
    console.log("Uploaded file!");
  });
});
module.exports = router;