const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  tourId: String,
  title: String,
  price: Number,
  duration: { days: Number, nights: Number },
  tourType: Array,
  tourDesc: String,
  tourInfo: String,
  maxPersons: String,
  tourLocation: String,
  featured: Boolean,
  images: Array,
  tourPlan: {
    scheduleDate: Array,
    itinerary: {
      day: Number,
      planTitle: String,
      PlanDesc: String,
      meals: Array,
    },

    hotels: Array,
    includes: Array,
    excludes: Array,
    tourNotes: Array,
  },
  likes: Number,
  customized: Boolean,
  tourStatus: String,
});

const TourModel = mongoose.model("tour", tourSchema, "tours");

module.exports = TourModel;
