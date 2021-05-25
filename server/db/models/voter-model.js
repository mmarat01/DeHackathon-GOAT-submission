const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Voter = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  vote: [{ type: Number, required: true }],
});

module.exports = mongoose.model("voters", Voter);
