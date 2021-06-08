const Test = require("../models/Test");

async function create_teste(req) {
  try {
    const c = new Test(req);
    await c.save();
    console.log(c);
  } catch (error) {
    console.log(error);
  }
}

async function find_teste() {
  try {
    const c = await Test.find({});
    console.log(c);
  } catch (error) {
    console.log(error);
  }
}

async function update_teste(req) {
  try {
    const doc = await Test.findOneAndUpdate(
      { name: req.name },
      { quote: req.quote }
    );
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
}

async function delete_teste(res) {
  try {
    const doc = await Test.findOneAndDelete({ name: res.name });
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { create_teste, find_teste, update_teste, delete_teste };
