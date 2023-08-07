const express = require('express')
const router = express.Router();
const {CommentController} = require('../../controllers')


router.post('/',CommentController.addComment);
router.get('/:id',CommentController.getComment);
router.get('/',CommentController.findComment)
router.patch('/',CommentController.deleteComment);

module.export = router;