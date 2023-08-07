const {LikeService} = require('../services')


async function addLike(data){
    try {
        const response = await LikeService.addLike({
            id : req.body.id,
            user_id : req.body.user_id

        });
        SucessResponse.message = "the likes is added";
        SucessResponse.data = response;
        return res.status(StatusCodes.OK).json(SucessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "the like is not added due to some technical errro";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}

async function removeLike(req,res){
    try {
        const response = await LikeService.removeLike({
            _id : req.body.id,
        });

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "the like is remove",
            data : response
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "like is not deleted due to some error",
            error : error
        })
    }
}

async function findLikes(data){
    try {
        const response = await LikeService.findLikes({
            id : req.body.id
        })
        SucessResponse.message = "the likes are founded";
        SucessResponse.data = response;
        return res.status(StatusCodes.OK).json(SucessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "the like are not founded";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}


module.exports = {
    addLike,
    removeLike,
    findLikes
    
}