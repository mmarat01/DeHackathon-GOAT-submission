// connect to mongo db
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .catch(e => {
    console.error("Connection error", e.message);
  })
  .then(console.log("Successfully connected to the 'dehackDB' database"));

const db = mongoose.connection;

module.exports = db;
