const { verifyToken } = require("../token");

function authorize(roles = []) {
  return (req, res, next) => {
    const token = req.headers["authorization"];

    const errorResponse = (statusCode, errorMessage, errorObject) => {
      return res.status(statusCode).send({
        message: errorMessage,
        error: errorObject,
      });
    };

    if (token) {
      const payload = verifyToken(token);

      if (payload == undefined) {
        // err instanceof TokenExpiredError
        errorResponse(408, "Token Expired", null);
      } else if (payload == false) {
        // err instanceof JsonWebTokenError
        errorResponse(403, "Invalid Token", null);
      } else if (payload?.id && roles.includes(payload?.role)) {
        // id and role available
        next();
      } else {
        // id or role missing
        errorResponse(401, "You do not have permissions..", null);
      }
    } else {
      errorResponse(403, "Login first to access..", null);
    }
  };
}

module.exports = authorize;
