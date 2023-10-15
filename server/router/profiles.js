const express = require("express");
const User = require("../models/users.js");
const Art_auction = require("../models/bidArt.js"); //art for collection&auction
const Art_buy = require("../models/sellArt.js"); // art for collection
const Art_sell = require("../models/sellArt.js"); // art for artwork
const router = express.Router();

router.get("/:_id", (req, res) => {
  //get info user profile
  User.findById({ _id: req.params._id })
    .then((data) => {
      res.json(data); // just showing data id
    })
    .catch(() => {
      res.status(500).json({ message: "Error" });
    });
});

// ต้องไปเช็ค user in owner id
router.get("/:_id/artwork", (req, res) => {
  Art_sell.find({ _id: req.params._id })
    .sort({ date: "desc" })
    .lean()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "Error" });
    });
});

router.get("/:_id/collection", (req, res) => {
  Art_buy.findById({ _id: req.params._id })
    .then((data) => {
      res.json(data); // just showing collection id
    })
    .catch(() => {
      res.status(500).json({ message: "Error" });
    });
});

// art for auction
router.get("/:_id/auction", (req, res) => {
  Art_auction.findById({ _id: req.params._id })
    .then((data) => {
      res.json(data); // just showing auction id
    })
    .catch(() => {
      res.status(500).json({ message: "Error" });
    });
});

module.exports = router;
