const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver é legal",
    },
    {
      title: "E",
      message: "JS usa js pra renderizar HTML",
    },
    {
      title: "M",
      message: "uito simples de usar",
    },
    {
      title: "A",
      message: "mado por alguns odiado por outros",
    },
    {
      title: "I",
      message: "nstall ejs",
    },
    {
      title: "S",
      message: "intaxe diferente",
    },
  ];

  const subtitle = "Uma linguagem de modelagem para criação de pagina HTML"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

// porta
app.listen(8080);
console.log("Rodando!!!");
