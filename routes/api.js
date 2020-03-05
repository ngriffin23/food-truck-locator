const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Path starts at 'api/v1'

// -------- User Routes

router.get('/users', ctrl.users.index);
// router.post('/users', ctrl.users.create);

// -------- Post Routes

// router.get('/posts', ctrl.posts.index);
// router.post('/cities/:cityId/posts', ctrl.posts.create);
// router.delete('/cities/:cityId/posts/:postId', ctrl.posts.destroy);



// GET VALUE FROM SUBMIT
module.exports = router;
