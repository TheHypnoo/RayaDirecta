const express = require("express");
require("pug");
var presupuestos = require("./routes/presupuestos");
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

app.use("/presupuesto", require("./routes/presupuestos"));
app.use("/polizas", require("./routes/polizas"));
app.use("/partes", require("./routes/partes"));
app.use("/clientes", require("./routes/clientes"));

app.get("/", (req, res) => {
  res.render("home.pug");
});

app.get("/info", (req, res) => {
  res.render("info.pug");
});

app.get("/polizas", (req, res) => {
  res.render("polizas.pug");
});

app.get("/partes", (req, res) => {
  res.render("partes.pug");
});

app.get("/*", (req, res) => {
  res.render("error.pug");
});

app.listen(port, () => {
  console.log("Start now");
});
