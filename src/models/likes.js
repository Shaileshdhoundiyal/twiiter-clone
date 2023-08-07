const mongoose = require('mongoose');
const {Schema} = mongoose

const like = new Schema({
    
    omModel : {
        type : String,
        required : true,
        enum : ['Tweet','Comment','Reply']
    },
    likable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
        refPath : 'onModel'
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId
    }
})

const Like = mongoose.model('Like',like);

module.exports = Like;