const mongoose = require('mongoose');
//User import for reference
const User = require('./users');

const sellArtSchema = mongoose.Schema({
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
        required: true,
    },
    //description of the image
    description: {
        type: String,
        default: '',
    },
    //price of image
    price: {
        type: Number,
        required: true,
    },
    //amount for sale
    amount: {
        type: Number,
        default: 1,
        min: 1, 
    },
    //array to keep user_id of users who own this image
    owners_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
    }],
    //user_id of user who sell this image
    artist_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
    },
    //time created for sale
    timestamp: {
        type: Date,
        default: Date.now * 7 * 3600 * 1000,
    },
});

module.exports = mongoose.model('SellArt', sellArtSchema);

