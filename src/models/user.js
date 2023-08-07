
const bcrypt= require('bcrypt');
const {ServerConfig} = require('../config')

const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = mongoose

const user = new Schema({
    user_name : {
        type : String,
        required : "unique username is required",
        unique : true 
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        //validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : "Strong password is required"
    },
    bio : {
        type : String
    },
    followers : {
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    },
    following : {
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    },
    Tweets : {
        type : [
            mongoose.Schema.Types.ObjectId
        ]
    }
})


user.pre('save',async function encrpt(next){
    try {
        const salt = await bcrypt.genSalt(+ServerConfig.SET_ROUNDS);
        const encrpted_password = bcrypt.hashSync(this.password,salt);
        this.password = encrpted_password;
        return next();
    } catch (error) {
        throw error;
    }
});  


const User = mongoose.model('User',user);

module.exports = User;


