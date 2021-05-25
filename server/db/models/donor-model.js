const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Donor = new Schema({
  name: { type: String, required: true },
  donations: [{ amount: { type: Number }, date: { type: String } }],
  total: { type: Number },
});

module.exports = mongoose.model("donors", Donor);
