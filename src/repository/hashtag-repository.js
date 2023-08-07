const {HashTag} = require('../models')
const CrudRepository = require('./crud-repository')


class HashTagRepository extends CrudRepository{
    constructor(){
        super(HashTag);
    }
    async find(data){
        try {
            const response = await HashTag.find(data).exec();
            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(data){
        try {
           const response = await HashTag.updateOne({_id : data._id},{$push : {tweets: data.tweetId }});
           return response;
        } catch (error) {
            throw error;
        }
    }
}




module.exports = HashTagRepository;