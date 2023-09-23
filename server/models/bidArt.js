const mongoose = require('mongoose');
const User = require('./users');

const bidArtSchema = mongoose.Schema({
    //Buffer keep binary data of image
    image: {
        type: Buffer,
    },
    //title of the image
    title: {
        type: String,
        required: true,
    },
    //tag for search images
    tag: {
        type: String,
        required: true,
    },
    //description of the image
    description: {
        type: String,
        default: '',
    },
    //user_id of users who join the auction
    attendance_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
    }],
    //user_id of user who own this image
    owners_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    //user_id of user who sell this image
    artist_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
    },
    //start price of the image
    start_price:{
        type: Number,
        required: true,
    },
    //current price of the image
    current_price:{
        type: Number,
        default: function() {
            return this.start_price;
        }
    },
    //number increment the price
    increment:{
        type: Number,
        required: true,
    },
    //start time
    start_at:{
        type: Date,
        required: true,
    },
    //end time
    end_at:{
        type: Date,
        required: true,
    },
    //time created for bid
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('BidArt', bidArtSchema);