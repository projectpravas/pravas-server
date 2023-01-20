const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: Number,
  name: { first: String, last: String },
  mob: Array,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
  },
  password: String,
  role: String,
  dob: Date,
  gender: String,
  avatar: String | File,
  status: String,
});

const UserModel = mongoose.model("user", userSchema, "users");

module.exports = UserModel;
