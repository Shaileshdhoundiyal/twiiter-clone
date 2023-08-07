const {CommentService} = require('../services')
const {StatusCodes} = require('http-status-codes')
const {SucessResponse,ErrorResponse} = require('../utils')


async function addComment(req,res){
    try {
        const response = await CommentService.addComment({
            content : req.body.content,
            tweet_id : req.body.tweetId,
            user_id : req.body.user_id

        });
        SucessResponse.message = "the comment is added";
        SucessResponse.data = response;
        return res.status(StatusCodes.OK).json(SucessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "the comment is not added due to some technical errro";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

async function getComment(req,res){
    try {
        const response = await CommentService.getComment({
            _id : req.body.id
        });

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "the comment is found",
            data : response
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "tweet is not found",
            error : error
        })
    }
}

async function findComment(data){
    try {
        const response = await CommentService.findComment({
            tweet_id : req.body.tweetId
        })
        SucessResponse.message = "the comments are founded";
        SucessResponse.data = response;
        return res.status(StatusCodes.OK).json(SucessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "the comments are not founded";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}



async function deleteComment(req,res){
    try {
        const response = await CommentService.deleteComment({
            _id : req.body.id,
        });

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "the comment is deleted",
            data : response
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "comment is not deleted due to some error",
            error : error
        })
    }
}

module.exports = {
    addComment,
    deleteComment,
    getComment,
    findComment
}
