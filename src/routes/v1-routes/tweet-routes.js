const express = require('express');
const {TweetController} = require('../../controllers')

const router = express.Router();


router.post('/create',TweetController.createTweet);

router.get('/',TweetController.getAllTweet);

router.get('/:id',TweetController.getTweet);

router.patch('/delete',TweetController.deleteTweet);

module.exports = router;