const errorHandler = (error, req, res, next) => {
    return error.message;
};

module.exports = errorHandler;