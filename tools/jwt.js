const jwt = require('jsonwebtoken');

module.exports.createToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 86400 }            // 1 Day in Seconds
    );
}