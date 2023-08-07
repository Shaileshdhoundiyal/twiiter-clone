const express = require('express')
const router = express.Router();
const {LikeController} = require('../../controllers')


router.post('/',LikeController.addLike);
router.get('/',LikeController.findLikes)
router.patch('/',LikeController.removeLike);

module.export = router;