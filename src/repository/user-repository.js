const {User} = require('../models')
const CrudRepository= require('./crud-repository')

class UserRepository{
    // constructor(){
    //     super(User);
    // }
    async create(data){
        try {
            console.log(User);
            const response = await User.create(data);
            return response 
        } catch (error) {
            throw error;
        }
    }
}


module.exports = UserRepository