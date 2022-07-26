const createError = require("http-errors");

//not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your request content was not found!"));
}

//errors handler
function errorHandler(err, req, res, next) {
  const error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.json(error);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
