const db = require("./db");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/produtos", (req, res, next) => res.send(db.getProdutos));
app.get("/produtos/:id", (req, res, next) =>
  res.send(db.getProduto(req.params.id))
);

app.post("/produtos", (req, res, next) => {
  const produto = db.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
