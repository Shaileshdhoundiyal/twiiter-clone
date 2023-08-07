const { Model } = require('mongoose');
const {Comment} = require('../models')
const CrudRepository = require('./crud-repository')

class CommentRepository extends CrudRepository {
    constructor(){
        super(Comment);
    }
    async findComments(data){
        try {
            const response = await this.find({data});
            response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CommentRepository