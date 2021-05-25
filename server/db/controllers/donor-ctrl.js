const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Donor = require("../models/donor-model");
dotenv.config();

const addDonation = (req, res) => {
  const { name, amount, date } = req.body;
  if (!name || !amount || !date)
    return res
      .status(400)
      .json({ success: false, message: "Bad request. All fields required" });

  if (amount <= 0)
    return res.status(400).json({
      success: false,
      message: "Bad request. Cannot donate less than 0 dollars.",
    });

  //capitalize every word
  const standardizedName = name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  Donor.findOne({ name: standardizedName }).then(donor => {
    if (donor) {
      donor.donations.push({ amount: amount, date: date });
      donor.total += Number(amount);
      donor
        .save()
        .then(() =>
          res.status(200).json({
            success: true,
            message: "Donation added to donor document.",
          })
        )
        .catch(err => {
          return res.status(400).json({
            success: false,
            message: err,
          });
        });
    } else {
      const newDonor = new Donor();
      newDonor.name = standardizedName;
      newDonor.donations = [{ amount: amount, date: date }];
      newDonor.total = amount;
      newDonor
        .save()
        .then(() =>
          res.status(200).json({ success: true, message: "New donor added" })
        )
        .catch(err => {
          return res.status(400).json({ success: false, message: err });
        });
    }
  });

  return res;
};

const getDonors = async (req, res) => {
  try {
    await Donor.find({}, (err, donors) => {
      if (err)
        return res
          .status(400)
          .json({ success: false, message: "Failed to get all donors." });

      const donorsInfo = donors.map(donor => ({
        name: donor.name,
        totalDonations: donor.total,
        donationsCount: donor.donations.length,
      }));
      console.log(donorsInfo);

      return res.status(200).json({ success: true, data: donorsInfo });
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addDonation,
  getDonors,
};
