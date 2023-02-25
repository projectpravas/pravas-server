const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UserSchema = new mongoose.Schema({
  userId: Number,
  name: { first: String, last: String },
  mobile: Array,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
  },
  password: String,
  designation: String,
  role: String,
  dob: Date,
  gender: String,
  avatar: String,
  status: String,
  tours: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tour",
    },
  ],
  userActivityDetails: {
    passwordTimeStamp: Number,
    sentEmailTimeStamp: Number,
    userTimeStamp: Number,
  },
});

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });

const UserModel = mongoose.model("user", UserSchema, "users");

module.exports = UserModel;
