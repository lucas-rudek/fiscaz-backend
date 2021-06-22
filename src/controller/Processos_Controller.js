const fiscazSchema = require("../models/fiscazSchema.js");

async function create_processo(req) {
  console.log(req);
  try {
    const c = new fiscazSchema(req);
    await c.save();
  } catch (error) {
    console.log(error);
  }
}

async function findAll_processo() {
  try {
    const c = await fiscazSchema.find({});
    return c;
  } catch (error) {
    console.log(error);
  }
}

async function find_processo(req) {
  try {
    const c = await fiscazSchema.find({ nome_empreendimento: req });
    return c;
  } catch (error) {
    console.log(error);
  }
}

async function update_processo(req) {
  try {
    await fiscazSchema.findOneAndUpdate(
      { nome_empreendimento: req.nome_empreendimento },
      {
        valor_orcado: req.valor_orcado,
        autor_projeto: req.autor_projeto,
        fiscal_indicado: req.fiscal_indicado,
        fiscal_substituto: req.fiscal_substituto
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function delete_processo(req) {
  try {
    const c = await find_processo(req);
    await fiscazSchema.findOneAndDelete({
      _id: c[0]._id
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  create_processo,
  find_processo,
  findAll_processo,
  update_processo,
  delete_processo
};
