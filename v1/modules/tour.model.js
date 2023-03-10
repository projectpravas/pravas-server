const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const TourSchema = new mongoose.Schema({
  tourId: Number,
  packageId: String,
  title: String,
  category: String,
  price: Number | String,
  duration: { days: Number | String, nights: Number | String },
  tourType: Array,
  tourDesc: String,
  tourInfo: String,
  maxPersons: Number | String,
  participants: Array,
  tourLocation: String,
  tourDate: Date,
  featured: Boolean,
  images: Array,
  tourPlan: {
    scheduleDate: Array,
    itinerary: [
      {
        day: Number | String,
        planTitle: String,
        planDesc: String,
        meals: {
          breakfast: Boolean,
          dinner: Boolean,
          lunch: Boolean,
        },
      },
    ],
    hotels: [{}],
    includes: [{}],
    excludes: [{}],
    tourNotes: [{}],
  },
  customized: Boolean,
  tourStatus: String,
  packageStatus: String,
  feedbacks: [
    {
      pravasiId: String,
      name: String,
      rating: Number,
      liked: Boolean,
      comment: String,
      date: Date,
      approved: String,
    },
  ],
});

TourSchema.plugin(AutoIncrement, { inc_field: "tourId" });

const TourModel = mongoose.model("tour", TourSchema, "tours");

module.exports = TourModel;
