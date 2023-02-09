const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const EnquirySchema = new mongoose.Schema({
  enuiryId: Number,
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
});

EnquirySchema.plugin(AutoIncrement, { inc_field: "enuiryId" });
const EnquiryModel = mongoose.model("enquiry", EnquirySchema, "enquiries");
module.exports = EnquiryModel;
