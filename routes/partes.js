const express = require("express");
const formidable = require("formidable");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("partes");
});

router.post("/", (req, res) => {
  var form = formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {});
  form.on("fileBegin", (name, file) => {

    var fileType = file.type.split("/").pop();

    if (fileType == "pdf") {
      var extension = file.name.split(".");
      extension[0] = Math.random().toString(36).substr(2);
      file.name = extension[0] + "." + extension[1];
      file.path = "./files/" + file.name;
      form.on("file", (name, file) => {
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