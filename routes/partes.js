var express = require("express");
const { formidable } = require("formidable");
var router = express.Router();

router
  .get("/", (req, res, next) => {
    res.render("partes");
  })
  .post("/", (req, res, next) => {
    let form = formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {});
    on("fileBegin", (name, file) => {
      file.path = "./files/" + file.name;
    });
    on("file", (name, file) => {
      console.log("Uploaded file!");
    });
  });

module.exports = router;
