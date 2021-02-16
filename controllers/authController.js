const User = require('../models/User');
const { handleErrors } = require('./handleErrors');


// Controller Actions:

module.exports.signup_post = async (req, res) => {
    try {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(user);
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = (req, res) => {
    res.send('Log in');
}
