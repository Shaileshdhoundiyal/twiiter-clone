const mongoose = require('mongoose');
const {Schema} = mongoose

const comment =  new Schema({
    content : {
        type : String
    },
    likes:{
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    },
    replies:{
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    },
    tweet_id : {
        type : mongoose.Schema.Types.ObjectId
    },
    user_id : {
        type : mongoose.Types.ObjectId
    }
})

const Comment = mongoose.model('Comment',comment);

module.exports = Comment;