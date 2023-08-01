const express = require('express')
const router = express.Router();
const postController = require('../controllers/posts')


router.get('/posts/', postController.index)
router.post('/posts/', postController.create);
router.delete('/posts/:id', postController.deletePost)
router.get('/posts/:id', postController.show)
router.put('/posts/:id', postController.edit)
// router.get('/posts/:id', postController.index)


module.exports = router
