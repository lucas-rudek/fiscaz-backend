var express = require("express");
var router = express.Router();

const Controller = require("../controller/Processos_Controller.js");

router.get("/", async (req, res) => {
  res.send("Hello");
});

router.get("/processos", async (req, res) => {
  const c = await Controller.findAll_processo();
  res.json(c);
});

router.post("/processos", async (req, res) => {
  await Controller.create_processo({
    name: req.body.name,
    quote: req.body.quote
  });
  res.send(`Processo criado: ${req.body.name}.`);
});

router.get("/processos/:name", async (req, res) => {
  const c = await Controller.find_processo(req.params.name);
  res.json(c);
});

router.post("/processos/delete/:name", async (req, res) => {
  await Controller.delete_processo({
    name: req.body.name
  });
  res.send(`Processo deletado: ${req.body.name}.`);
});

router.post("/processos/update/:name", async (req, res) => {
  await Controller.update_processo({
    name: req.body.name,
    quote: req.body.quote
  });
  res.send(`Processo atualizado: ${req.body.name}.`);
});

module.exports = router;
