const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        postTitle: String,
        date: String,
        foodTruckName: { type: String, required: true },
        meal: String,
        body: { type: String, maxlength: 100},
    },{timestamps: true});

    module.exports = mongoose.model('Post', PostSchema); 
  