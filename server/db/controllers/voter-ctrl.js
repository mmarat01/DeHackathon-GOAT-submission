const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Voter = require("../models/voter-model");
dotenv.config();

const register = (req, res) => {};

const login = (req, res) => {
  Voter.findOne({ username: req.body.username }).then(user => {
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "user does not exist" });

    bcrypt.compare(req.body.password, user.password, (err, valid) => {
      if (!valid) return res.status(400).json({ success: false, message: err });

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

      return res
        .header("authorization", token)
        .status(200)
        .json({ success: true, message: "logged in!" });
    });
  });
};

const addVote = (req, res) => {};

const getVotes = (req, res) => {};

module.exports = { register, login, addVote, getVotes };
