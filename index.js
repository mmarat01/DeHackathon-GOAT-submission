const express = require("express");
const db = require("./server/db");
const cors = require("cors");
const path = require("path");
const donorRouter = require("./server/routers/donor-router.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
// production only?
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

app.use("/api/donors/", donorRouter);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(process.env.PORT || 8000, () => console.log("Server is running!"));
