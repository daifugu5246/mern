const express = require("express");
const User = require("../models/users.js");
const Auction = require("../models/bidArt.js"); 
const Buy = require("../models/sellArt.js"); 
const Sell = require("../models/sellArt.js"); 
const router = express.Router();


router.get("/:_id", (req, res) => {
  //ส่งข้อมูลของแต่ล่ะ ID
  User.findById({ _id: req.params._id })
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "Error" });
    });
});

// เมื่อเข้าถึง id/artwork ส่งข้อมูลรูปที่คุณเป็นคนวาดทั้งใน sellArt(Sell) และ bidArt(Auction) 
router.get("/:_id/artwork", (req, res) => {

  const art_sell = Sell.find({ artist_id: req.params._id }).lean()
  const art_auction = Auction.find({ artist_id : req.params._id}).lean()
  //รอข้อมูลให้ค้นหาเสร็จสิ้นแล้วนำมารวมกัน หลังจากนั้นทำการ sort ข้อมูล
  Promise.all([art_sell,art_auction]).then(([art_sellData,art_auctionData])=>{ 
    const mergeData = [...art_sellData,...art_auctionData];
    mergeData.sort((a, b) => b.timestamp - a.timestamp);
    res.json(mergeData);
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).json({message:error});
    
  })
});

// เมื่อเข้าถึง id/collection ส่งข้อมูลรูปที่คุณเป็นเจ้าข้องทั้งใน sellArt(Buy) และ bidArt(Auction)
router.get("/:_id/collection", (req, res) => {
  const art_buy = Buy.find({owners_id:{"$in":[req.params._id]}}).lean();
  const art_auction = Auction.find({owners_id : req.params._id}).lean();
  //รอข้อมูลให้ค้นหาเสร็จสิ้นแล้วนำมารวมกัน หลังจากนั้นทำการ sort ข้อมูล
  Promise.all([art_buy,art_auction]).then(([art_buyData,art_auctionData])=>{
    const mergeData = [...art_buyData,...art_auctionData];
    mergeData.sort((a, b) => b.timestamp - a.timestamp);
    res.json(mergeData);
  })
  .catch((error)=>{
    console.log(error);
    res.status(500).json({message:error});
  })
  
});

// เมื่อเข้าถึง id/auction ทำการส่งข้อมูลรูปภาพที่เรามีส่วนร่วมในการประมูล
router.get("/:_id/auction", (req, res) => {
  Auction.find({attendance_id:{"$in":[req.params._id]}}).lean()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "Error" });
    });
});

module.exports = router;
