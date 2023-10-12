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
    notiType: {
        type: String,
        enum: ['CLOSED', 'WINNER'],
        required: true,
    },
    //time created for notification
    timestamp: {
        type: Date,
        default: Date.now() + 7  * 3600 * 1000,
    },
    //optional
    expired:{
        type: Date,
        default: function() {
            this.timestamp + 604800000
        },
    }
});

module.exports = mongoose.model('Notifications', notiSchema);