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

  const destroy = (req, res) => {
    // Find The User the Post Is Embedded In
    db.User.findById(req.params.userId, (err, foundUser) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      // Mongoose id() method only works on arrays with embedded records
      // It takes the id of the sub document you want to find, and returns the whole object
      const postToDelete = foundUser.posts.id(req.params.postId);
  
      // If we do not find a record, do not continue past this point.
      // Respond back appropriately
      if (!postToDelete) {
        return res.status(400).json({status: 400, error: 'Could not find post'});
      }
  
      // If we make it past the "if" statement above, we found the document to be deleted
      // The remove method will delete that object from the array
      postToDelete.remove();
  
      // By deleting the "postToDelete", we have altered the "foundUser" record
      // Use the Mongoose save() method to save the altered "foundUser" record
      foundUser.save((err, savedCity) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
        // Now we need to delete the original Post from the Post collection
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
      destroy
  }
  