const {LikesRepository} = require('./../repository')

const likesRepository = new LikesRepository();

async function addLike(data){
    try {
        const response = await likesRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function removeLike(data){
    try {
        const response = await likesRepository.deleteOne(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function findLikes(data){
    try {
        const response = await likesRepository.findlikes(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    addLike,
    removeLike,
    findLikes
}