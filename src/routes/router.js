var express = require("express");
var router = express.Router();
var path = require("path");

const TestController = require("../controller/TestController.js");

router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../view", "index.html"));
});

router.get("/usuarios", async (req, res) => {
  const c = await TestController.findAll_teste();
  res.json(c);
});

router.post("/usuarios", async (req, res) => {
  await TestController.create_teste({
    name: req.body.name,
    quote: req.body.quote
  });
  res.send(`Usuário criado: ${req.body.name}.`);
});

router.get("/usuarios/:name", async (req, res) => {
  const c = await TestController.find_teste(req.params.name);
  res.json(c);
});

router.post("/usuarios/delete/:name", async (req, res) => {
  await TestController.delete_teste({
    name: req.body.name
  });
  res.send(`Usuário deletado: ${req.body.name}.`);
});

router.post("/usuarios/update/:name", async (req, res) => {
  await TestController.update_teste({
    name: req.body.name,
    quote: req.body.quote
  });
  res.send(`Usuário atualizado: ${req.body.name}.`);
});

module.exports = router;
