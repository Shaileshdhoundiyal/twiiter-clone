const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = mongoose

const tweet = new Schema({
    content :{
        type : String
    },
    likes : {
        type : Number
    },
    noOfReTweet : {
        type : Number
    },
    comment : {
        type : ObjectId
    }
})

const Tweet = mongoose.model('Tweet',tweet);

module.exports = Tweet;
