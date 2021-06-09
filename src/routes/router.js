var express = require("express");
var router = express.Router();

const TestController = require("../controller/TestController.js");

router.get("/", async (req, res) => {
  //res.sendFile(__dirname + "../view/index.html");
});

router.post("/create", async (req, res) => {
  TestController.create_teste({
    name: req.body.name,
    quote: req.body.quote
  });
});

router.post("/delete", async (req, res) => {
  TestController.delete_teste({
    name: req.body.name
  });
});

router.post("/update", async (req, res) => {
  TestController.update_teste({
    name: req.body.name,
    quote: req.body.quote
  });
});

module.exports = router;
