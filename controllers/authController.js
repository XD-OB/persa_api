const { handleErrors } = require('../tools/handleErrors');
const { createToken } = require('../tools/jwt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Controller Actions:

module.exports.signup_post = async (req, res) => {
    try {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
        const token = createToken(user._id);
        res.cookie(
            'persaJWT',
            token,
            {
                httpOnly: true,
                maxAge: 86400000
            }
        );
        res.status(201).json({"id": user._id, token});
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = (req, res) => {
    res.send('Log in');
}
