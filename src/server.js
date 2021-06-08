const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dbConfig = require("./config/db.config.js");

const TestController = require("./controller/TestController.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "https://gvcej.csb.app/" //fiscaz front
};

app.use(cors(corsOptions));

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.post("/create", async (req, res) => {
  TestController.create_teste({
    name: req.body.name,
    quote: req.body.quote
  });

app.post("/delete/:name", async (req, res) => {
  TestController.delete_teste({
    name: req.body.name
  });
});
