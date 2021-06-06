const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dbConfig = require("../config/db.config.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "https://gvcej.csb.app/" //fiscaz front
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", async (req, res) => {
  res.send("tudo certo");
  console.log("asdasd");
});
