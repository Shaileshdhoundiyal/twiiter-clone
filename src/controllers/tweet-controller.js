const {TweetService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {SucessResponse,ErrorResponse} = require('../utils')


async function createTweet(req,res){
    try {
        const response = await TweetService.createTweet({
            content : req.body.content,
            likes : req.body.likes,
            noOfReTweet : req.body.noOfReTweet,
            comment : req.body.comment
        });
        SucessResponse.message = "the tweet is created";
        SucessResponse.data = response;
        return res.status(StatusCodes.OK).json(SucessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "tweet is not tweeted due to some error";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

async function getTweet(req,res){
    try {
        const response = await TweetService.getTweet({
            _id : req.body.id
        });

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "the tweet is founded",
            data : response
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "tweet is not tweeted due to some error",
            error : error
        })
    }
}

async function getAllTweet(req,res){
    try {
        const response = await TweetService.getAllTweet()

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "the tweet is comming",
            data : response
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "tweet is not tweeted due to some error",
            error : error
        })
    }
}

async function deleteTweet(req,res){
    try {
        const response = await TweetService.deleteTweet({
            _id : req.body.id,
        });

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "the tweet is deleted",
            data : response
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "tweet is not deleted due to some error",
            error : error
        })
    }
}

module.exports = {
    createTweet,
    getAllTweet,
    getTweet,
    deleteTweet
}
