// Handle the Error Dictionary

module.exports.handleErrors = (err) => {
    let errors = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    };
    // Duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }
    // Validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(
            ({ properties }) => {
                errors[properties.path] = properties.message;
            }
        );
    }

    return errors; 
}