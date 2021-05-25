//set up and export controller funcs with express router
const express = require("express");
const voterCtrl = require("../db/controllers/voter-ctrl");
const auth = require("../utils/auth");
const router = express.Router();

router.post("/register", voterCtrl.register);
router.post("/login", voterCtrl.login);
router.post("/add-vote", auth, voterCtrl.addVote);
router.get("/", voterCtrl.getVotes);

module.exports = router;
