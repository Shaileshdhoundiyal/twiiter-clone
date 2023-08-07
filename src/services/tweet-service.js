const { TweetRepository, HashtagRepository } = require('../repository');

const {} = require('../utils')


const tweetRepository = new TweetRepository();
const hashtagRepository = new HashtagRepository();
async function createTweet(data) {
    try {
        const tweet = await tweetRepository.create(data);
        const hashtags = data.content.match(/#(\w*[0-9a-zA-Z]+\w*[0-9a-zA-Z])/g).
            map((tag) => tag.substring(1).toLowerCase());
        for (const element of hashtags) {
            const hashtag = await hashtagRepository.find({ name: element });
            if (hashtag.length == 0) {
                const response = await hashtagRepository.create({
                    name: element,
                    tweets: [tweet._id]
                })
            }
            else {
                const newHashtag = await hashtagRepository.update({
                    _id: hashtag[0]._id,
                    tweetId: tweet._id
                })
            }

        }
        return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getTweet(data){
    try {
        const response = await tweetRepository.getById(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getAllTweet(){
    try {
        const response = await tweetRepository.getAll();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteTweet(data){
    try {
        const response = await tweetRepository.delete(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    createTweet,
    getAllTweet,
    getTweet,
    deleteTweet
}