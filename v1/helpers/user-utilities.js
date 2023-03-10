const _ = require("lodash");

function userFilter(result) {
  return _.pick(result, [
    "_id",
    "userId",
    "name",
    "mobile",
    "email",
    "address",
    "status",
    "verified",
    "role",
    "avatar",
    "gender",
    "dob",
    "designation",
    "tours",
    "userActivityDetails",
    "wishlist",
  ]);
}

function userFilterArray(arr) {
  return _.map(arr, (user) => userFilter(user));
}

module.exports = { userFilter, userFilterArray };
