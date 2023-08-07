const mongoose = require('mongoose');
const {Schema} = mongoose

const replies =  new Schema({
    content : {
        type : String
    },
    likes:{
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    },
    comment_id : {
        type : mongoose.Schema.Types.ObjectId
    },
    user_id : {
        type : mongoose.Types.ObjectId
    }
})

const Replies = mongoose.model('Replies',replies);

module.exports = Replies;