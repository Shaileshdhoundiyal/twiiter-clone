const express = require('express');

const router = express.Router();

const tweetRoutes = require('./tweet-routes');
const CommentRoutes = require('./comment-routes')

router.use('/tweet',tweetRoutes);

router.use('/comment',CommentRoutes);

module.exports = router;