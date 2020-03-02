const db = require ('../models');

const index = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      res.json(allPosts);
    });
  };

  const create = (req, res) => {
    req.body.user = '5e5d5aaa9ca91b67e4e22fca'; // Temp user association for testing
  
    // First create a Post, Then Associate it with a User
    db.Post.create(req.body, (err, newPost) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      // We use the User ID in the request params to find which User the Post should be embedded in
      db.User.findById(req.params.userId, (err, foundUser) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
        // Once we find the User, we can use the push() method to push the new Post into the Users posts
        foundUser.posts.push(newPost);
  
        // Anytime a database document is altered, it must be saved
        foundUser.save((err, savedUser) => {
          if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          res.json(newPost);
        });
  
      });
    });
  };


  module.exports = {
      index,
      create
  }
  