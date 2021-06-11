const fiscazSchema = require("../models/fiscazSchema.js");

async function create_processo(req) {
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

async function find_processo(res) {
  try {
    const c = await fiscazSchema.find({ name: res });
    return c;
  } catch (error) {
    console.log(error);
  }
}

async function update_processo(req) {
  try {
    const doc = await fiscazSchema.findOneAndUpdate(
      { name: req.name },
      { quote: req.quote }
    );
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
}

async function delete_processo(res) {
  try {
    const doc = await fiscazSchema.findOneAndDelete({ name: res.name });
    console.log(doc);
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
