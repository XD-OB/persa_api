// Handle the Error Dictionary

module.exports.handleErrors = (err) => {
    let errors = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    };

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(
            ({ properties }) => {
                errors[properties.path] = properties.message;
            }
        );
    }

    return errors; 
}