//set up and export controller funcs with express router
const express = require("express");
const donorCtrl = require("../db/controllers/donor-ctrl");
const router = express.Router();

router.post("/donation", donorCtrl.addDonation);
router.get("/all", donorCtrl.getDonors);

module.exports = router;
