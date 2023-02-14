const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const EnquirySchema = new mongoose.Schema({
  enquiryId: Number,
  contactPersonName: String,
  contactPersonMobile: String,
  contactPersonEmail: String,
  destinations: [{ place: String }],
  travelDates: { from: String, to: String },
  travelDuration: Number,
  participants: [{ name: String, age: Number }],
  hotelCategory: String,
  rooms: Number,
  meals: {
    breakfast: Boolean,
    lunch: Boolean,
    dinner: Boolean,
  },
  anythingElse: String,
  enquiryStatus: String,
});

EnquirySchema.plugin(AutoIncrement, { inc_field: "enquiryId" });
const EnquiryModel = mongoose.model("enquiry", EnquirySchema, "enquiries");
module.exports = EnquiryModel;
