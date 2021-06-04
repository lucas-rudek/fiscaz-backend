const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, (req, res) => {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.post("/aaaa", (req, res) => {
    console.log(req.body);
  });
});
