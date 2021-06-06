const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Test = new Schema(
  {
    name: String,
    quote: String,
    specials: Array
  },
  { collection: "Teste" }
);

module.exports = mongoose.model("Teste", Test);
