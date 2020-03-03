const mongoose = require('mongoose');
const Post = require('./Post');

// email validation
const validateEmail = function(email) {
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return re.test(email)
};

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, minlength:2, maxlength: 30 },
        lastName: { type: String, required: true, minlength:2, maxlength: 30 },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: { type: String, required: true, minlength: 8, maxlength: 20 },
        posts: [Post.schema]
    },
    {timestamps: true});


    module.exports = mongoose.model('User', UserSchema);