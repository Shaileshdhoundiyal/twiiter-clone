const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = mongoose

const tweet = new Schema({
    content :{
        type : String
    },
    likes : {
        types : [
            mongoose.Schema.Types.ObjectId
        ]
    },
    // noOfReTweet : {
    //     type : Number
    // },
    comments : {
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    }
})

const Tweet = mongoose.model('Tweet',tweet);

module.exports = Tweet;
