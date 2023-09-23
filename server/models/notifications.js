const mongoose = require('mongoose');
const User = require('./users');
const BidArt = require('./bidArt');

const notiSchema = mongoose.Schema({
    img_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BidArt',
    },
    users_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
    }],
    text: {
        type: String,
        required: true,
    },
    //time created for notification
    timestamp: {
        type: Date,
        default: Date.now,
    },
    //optional
    expired:{
        type: Date,
        default: Date.now + 604800000,
    }
});