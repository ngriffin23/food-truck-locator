const db = require ('../models');

const index = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
      res.json(allPosts);
    });
  };

const show = (req, res) => {
  db.Post.findById(req.params.id, (err, findPost) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    res.json(findPost);
  });
};

const create = (req, res) => {
    req.body.user = '5e5d5aaa9ca91b67e4e22fca'; // Temp user association for testing
  
  db.Post.create(req.body, (err, newPost) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      db.User.findById(req.params.userId, (err, foundUser) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
        foundUser.posts.push(newPost);
  
        foundUser.save((err, savedUser) => {
          if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          res.json(newPost);
        });
  
      });
    });
  };

  const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.userId, (err, foundUser) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
      console.log()
      const postToUpdate = foundUser.posts.id(req.params.postId);

      if (!postToUpdate) {
        return res.status(400).json({status: 400, error: 'Could not find post'});
      };
  
      foundUser.save((err, savedUser) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
        db.Post.findByIdAndUpdate(req.params.postId, (err, updatedPost) => {
          if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          res.json(updatedPost);
        });
      });
    })
  };
  

  const destroy = (req, res) => {
    db.User.findById(req.params.userId, (err, foundUser) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

      const postToDelete = foundUser.posts.id(req.params.postId);

      if (!postToDelete) {
        return res.status(400).json({status: 400, error: 'Could not find post'});
      };

      postToDelete.remove();
  
      foundUser.save((err, savedCity) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
        db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
          if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          res.json(deletedPost);
        });
      });
    })
  };

  module.exports = {
      index,
      show,
      create,
      update,
      destroy
  }
  