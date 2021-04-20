"use strict";

var express = require("express");

var formidable = require('formidable');

var router = express.Router();
router.get("/", function (req, res) {
  res.render("partes");
});
router.post("/", function (req, res) {
  /*
    const form = formidable({
      multiples: true
    });
  */
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {});
  form.on("fileBegin", function (name, file) {
    var fileType = file.type.split('/').pop();

    if (fileType == 'pdf') {
      var extension = file.name.split('.');
      extension[0] = Math.random().toString(36).substr(2);
      file.name = extension[0] + '.' + extension[1];
      file.path = "./files/" + file.name;
      form.on("file", function (name, file) {
        res.render("partes", {
          error: 2
        });
        console.log("Uploaded file!");
      });
    } else {
      res.render("partes", {
        error: 1
      });
    }
  });
});
module.exports = router;