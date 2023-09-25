const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    //base64 keep binary data of image
    profile_img:{
        type: String, //to handle profile image
    },
    following_id:[{ //keep user_id of whose this user following is
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
    }],
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String, //display name
        required: true,
    },
    username: {
        type: String, //@username
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    peach:{
        type : Number,// token that get from selling art
        default: 0,
        min: 0,
    },
    leaf:{
        type : Number,// token that use for buying art, must use miney to buy it
        default: 0,
        min: 0,
    },
    description:{
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('User', userSchema);