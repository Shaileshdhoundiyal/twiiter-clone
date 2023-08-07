const {CommentRepository} = require('../repository')


const commentRepository = new CommentRepository();

async function addComment(data){
    try {
        const comment = await commentRepository.create(data);
        return comment;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteComment(data){
    try {
        const response = await commentRepository.deleteOne(data);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
   
}

async function findComment(data){
    try {
        const response = await CommentRepository.findlikes(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    addComment,
    deleteComment,
    findComment
}