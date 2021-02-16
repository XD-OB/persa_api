const mongoose = require('mongoose');
const { isEmail, isAlpha, isAlphanumeric } = require('validator');

const isName = (value) => isAlpha(value, ['en-US'], { ignore:" -" });

const userSchema = new mongoose.Schema({
    is_owner: {
        type: Boolean,
        default: true,
    },
    first_name: {
        type: String,
        trim: true,
        lowercase: true,
        required: [ true, 'Please enter your first name' ],
        validate: [ isName, 'Please enter a valid name' ],
        maxlength: [ 150, 'Maximum name length is 255 characters' ],
    },
    last_name: {
        type: String,
        trim: true,
        lowercase: true,
        required: [ true, 'Please enter your last name' ],
        validate: [ isName, 'Please enter a valid name' ],
        maxlength: [ 150, 'Maximum name length is 255 characters' ],
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [ true, 'Please enter an email' ],
        validate: [ isEmail, 'Please enter a valid email' ],
        maxlength: [ 150, 'Maximum email length is 150 characters' ],
    },
    password: {
        type: String,
        required: [ true, 'Please enter a password' ],
        minlength: [ 8, 'Minimum password length is 8 characters' ],
        maxlength: [ 1024, 'The password is long!' ],
    },
    business_name: {
        type: String,
        lowercase: true,
        maxlength: [ 255, 'Maximum business name length is 255 characters' ],
    },
    address: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
        uppercase: true,
        validate: [ isName, 'Please enter a valid country name' ],
        maxlength: [ 150, 'Maximum country name length is 150 characters' ],
    },
    register_date: {
        type: Date,
        default: Date.now(),
    },
    sales_persons: [ String ],
});

const User = mongoose.model('user', userSchema);

module.exports = User;