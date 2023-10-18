const express = require('express');
const Users = require('../models/users');
const BidArt = require('../models/bidArt.js');
const Notification = require('../models/notifications.js');
const router = express.Router();

/*BidArt time&status update service*/
setInterval(() => {
    BidArt.find({}).then((docs) => {
        docs.forEach((doc) => {
            const now = new Date().getTime()//set to Asia/Bangkok
            const s = new Date(doc.start_at).getTime();
            const e = new Date(doc.end_at).getTime();
            console.log(now, s, e);
            if (doc.status == 'END') {

            }
            else if (now > e) {
                doc.status = 'END';
                //จบแล้วก็สร้าง Notification 2 อัน
                Notification.insertMany([
                    {
                        image_id: doc.image_id,
                        user_id: doc.user_id,
                        notiType: 'CLOSED',

                    },
                    {
                        image_id: doc.image_id,
                        user_id: [doc.owner_id],
                        notiType: 'WINNER',
                    }
                ]).then(() => {
                    console.log('Notification inserted successfully');
                }).catch((err) => {
                    console.log('Error:', err);
                })
            }
            else if (now >= s && now <= e) {
                doc.status = 'LIVE';
            }
            //กรณียังไม่ถึงเวลาประมูล
            else if (now < s) {
                doc.status = 'WAITING';
            }
            doc.save();
        });
    });
}, 3000);

/*seller api*/

//[finish] ส่งข้อมูลรูปภาพที่จะลงประมูลเข้า database
router.post('/auction-publish', (req, res) => {
    const data = req.body;
    BidArt.create({
        image: data.image,
        title: data.title,
        tag: data.tag,
        description: data.description,
        artist_id: data.artist_id,
        start_price: data.start_price,
        increment: data.increment,
        start_at: new Date(data.start_at),
        end_at: new Date(data.end_at),
        status: 'WAITING',
    }).then(() => {
        res.status(201).send("Auction publish successfully");
    }).catch((err) => {
        console.error("Error publish fail \n", err);
        res.status(500).send("Error  publish fail \n", err);
    })
});
router.post('/sell-publish', (req, res) => {
    res.send('ยังไม่ได้ทำค้าบบบบ');
});

/*buyer api*/

//[finish] ดึงรูปประมูลทั้งหมด และเรียงตามเวลาที่ลงจากน้อยไปมาก
router.get('/', (req, res) => {
    BidArt.find({})
        .sort({ date: 'desc' }).lean()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).send("Error find images failed" + err));
});

//[finish] ข้อมูลของรูปเดี่ยวๆเมื่อคลิดกเข้าไปดูห้องประมูล
router.get('/:img_id', (req, res) => {
    BidArt.findOne({ _id: req.params.img_id })
        .then((art) => {
            data = art;
            Users.findOne({ _id: art.artist_id })
                .then((artist) => {
                    res.status(200).json({
                        art,
                        artist_info: {
                            artist_name: artist.name,
                        }
                    })
                });
        }).catch((err) => res.status(500).send("Error find image failed" + err));
});

//[finish] อัพเดตค่า status ,current_price ให้กับ fornt-end จะเรียกใช้เมื่อต้องการเปลี่ยนสถานะ
router.get('/:img_id/update', (req, res) => {
    BidArt.findById(req.params.img_id).exec()
        .then((data) => {
            const now = Date.now() + 7 * 3600 * 1000;//set to Asia/Bangkok
            const s = new Date(data.start_at).getTime();
            const e = new Date(data.end_at).getTime();
            //กรณีจบการประมูลแล้ว
            if (data.status == 'END') {

            }
            else if (now >= e) {
                data.status = 'END';
            }
            //กรณีถึงเวลาประมูล
            else if (now >= s) {
                data.status = 'LIVE';
            }
            //กรณียังไม่ถึงเวลาประมูล
            else if (now < s) {
                data.status = 'WAITING';
            }
            data.save();
            res.status(200).json({
                status: data.status,
                current_price: data.current_price,
                owner_id: data.owner_id
            })
        })
        .catch((err) => res.status(500).send("Error: " + err));
});
//[finish] รับค่าที่ bid -> validate -> patch ค่าลง database
router.patch('/:img_id/bid-confirm', (req, res) => {
    BidArt.findById(req.params.img_id)
        .then((data) => {
            if (data.status == 'END') {
                return res.status(400).json({ message: "This auction is now closed." });
            }
            if (req.body.bid_value < data.current_price + data.increment) {
                return res.status(400).json({ message: "Your bid is not the highest." });
            }
            //find previous user
            Users.findById(data.owner_id).then((user) => {
                //return leaf to previous user
                user.leaf += data.current_price
                user.save();
            });
            //change current price
            data.current_price = req.body.bid_value;
            //change leader
            data.owner_id = req.body.user_id;
            data.save();
            Users.findById(req.body.user_id).then((user) => {
                res.status(200).json({
                    leader: user.username,
                    current_price: data.current_price,
                });
            });
        }).catch((err) => res.status(500).send("Error:" + err.message));
});

module.exports = router;