const { isAlpha } = require('validator');

module.exports.isName = (value) => isAlpha(value, ['en-US'], { ignore:" -" });

module.exports.isStrongPassword = (value) => {
    const strongPasswordRegExp = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=\-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
    return strongPasswordRegExp.test(value);
}
