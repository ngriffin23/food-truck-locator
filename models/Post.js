const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        foodTruckName: { type: String, required: true },
        date: String,
        body: { type: String, maxlength: 100},
        image: String
    },{timestamps: true});

    module.exports = mongoose.model('Post', PostSchema); 
  