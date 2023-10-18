const mongoose = require('mongoose');
const User = require('./users');

const bidArtSchema = mongoose.Schema({
    //base64 keep binary data of image
    image: {
        type: String,
    },
    //title of the image
    title: {
        type: String,
        required: true,
    },
    //tag for search images
    tag: {
        type: String,
        default: '',
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
            return this.start_price ;
        },
    },
    //number increment the price
    increment:{
        type: Number,
        required: true,
    },
    //start time
    start_at:{
        type: Number,//end time at 00.00
        required: true,
    },
    //end time
    end_at:{
        type: Number,//end time at 23.59
        required: true,
    },
    //status of the image
    status: {
        type: String,
        enum: ['WAITING','LIVE', 'END'],
        required: true,
    },
    //time created for bid
    timestamp: {
        type: Number,
        default: Date.now() + 7 * 3600 * 1000,
    },
});

module.exports = mongoose.model('BidArt', bidArtSchema);