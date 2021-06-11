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
    nome_empreendimento: req.body.nome_empreendimento,
    valor_orcado: req.valor_orcado,
    autor_projeto: req.autor_projeto,
    fiscal_indicado: req.fiscal_indicado,
    fiscal_substituto: req.fiscal_substituto
  });
  res.send(`Processo criado: ${req.body.nome_empreendimento}.`);
});

router.get("/processos/:nome_empreendimento", async (req, res) => {
  const c = await Controller.find_processo(req.params.nome_empreendimento);
  res.json(c);
});

router.post("/processos/delete/:nome_empreendimento", async (req, res) => {
  await Controller.delete_processo({
    nome_empreendimento: req.body.nome_empreendimento
  });
  res.send(`Processo deletado: ${req.body.nome_empreendimento}.`);
});

router.post("/processos/update/:nome_empreendimento", async (req, res) => {
  await Controller.update_processo({
    nome_empreendimento: req.body.nome_empreendimento,
    valor_orcado: req.valor_orcado,
    autor_projeto: req.autor_projeto,
    fiscal_indicado: req.fiscal_indicado,
    fiscal_substituto: req.fiscal_substituto
  });
  res.send(`Processo atualizado: ${req.body.nome_empreendimento}.`);
});

module.exports = router;
