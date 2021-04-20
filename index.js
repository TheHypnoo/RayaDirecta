const express = require("express");
const formidable = require('formidable');
require("pug");
const app = express();
const port = 80;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.set("views", "./views");

app.set("view engine", "pug");
app.post("/", (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {});
  form.on("fileBegin", (name, file) => {
    file.path = "./files/" + file.name;
  });
  form.on("file", (name, file) => {
    res.render('home.pug')
    console.log("Uploaded file!");
  });
});

app.use("/partes", require("./routes/partes"));
app.use("/presupuesto", require("./routes/presupuestos"));
app.use("/polizas", require("./routes/polizas"));
app.use("/clientes", require("./routes/clientes"));

app.get("/", (req, res) => {
  res.render("home.pug");
});

app.get("/info", (req, res) => {
  res.render("info.pug");
});

app.get("*", (req, res) => {
  res.render("error.pug");
});

app.listen(port, () => {
  console.log("Start now");
});
