const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fiscazSchema = new Schema(
  {
    name: String,
    quote: String
  },
  { collection: "Processos" }
);

module.exports = mongoose.model("Processos", fiscazSchema);
