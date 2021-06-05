const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://lucas:Moitaazul88@cluster0.xguoi.mongodb.net/fiscaz?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("fiscaz");
    const testCollection = db.collection("test");

    app.listen(8080, (req, res) => {
      app.get("/", (req, res) => {
        const cursor = testCollection
          .find()
          .toArray()
          .then((results) => {
            console.log(results);
          })
          .catch((error) => console.error(error));

        res.sendFile(__dirname + "/index.html");
      });
      app.post("/", (req, res) => {
        testCollection
          .insertOne(req.body)
          .then((result) => {
            res.redirect("/");
          })
          .catch((error) => console.error(error));
      });
    });
  })
  .catch((error) => console.error(error));
