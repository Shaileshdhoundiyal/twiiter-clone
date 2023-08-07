const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = mongoose

const hashtag = new Schema({
    name :{
        type : String,
        unique : true,
        require : true
    },
    tweets : {
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    }
})

const Hashtag = mongoose.model('Hashtag',hashtag);

module.exports = Hashtag;
