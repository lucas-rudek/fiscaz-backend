const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fiscazSchema = new Schema(
  {
    nome_empreendimento: String,
    valor_orcado: Number,
    autor_projeto: String,
    fiscal_indicado: String,
    fiscal_substituto: String
  },
  { collection: "Processos" }
);

module.exports = mongoose.model("Processos", fiscazSchema);
