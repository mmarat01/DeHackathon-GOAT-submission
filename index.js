const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./server/db");
const cors = require("cors");
const path = require("path");
const donorRouter = require("./server/routers/donor-router.js");
const voterRouter = require("./server/routers/voter-router.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/donors/", donorRouter);
app.use("/api/voters/", voterRouter);

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(process.env.PORT || 8000, () => console.log("Server is running!"));
