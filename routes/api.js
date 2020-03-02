const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Path starts at 'api/v1'

// -------- User Routes
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);

// -------- Post Routes
router.get('/posts', ctrl.posts.index);
router.post('/users/:userId/posts', ctrl.posts.create);
router.delete('/users/:userId/posts/:postId', ctrl.posts.destroy);




module.exports = router;