const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const TourSchema = new mongoose.Schema({
  tourId: Number,
  title: String,
  category: String,
  price: Number,
  duration: { days: Number, nights: Number },
  tourType: Array,
  tourDesc: String,
  tourInfo: String,
  maxPersons: String,
  participants: Array,
  tourLocation: String,
  featured: Boolean,
  images: Array,
  tourPlan: {
    scheduleDate: Array,
    itinerary: [
      {
        day: Number,
        planTitle: String,
        PlanDesc: String,
        meals: Array,
      },
    ],
    hotels: Array,
    includes: Array,
    excludes: Array,
    tourNotes: Array,
  },
  customized: Boolean,
  tourStatus: String,
  feedbacks: [
    {
      pravasiId: String,
      liked: Boolean,
      comment: String,
    },
  ],
});

TourSchema.plugin(AutoIncrement, { inc_field: "tourId" });

const TourModel = mongoose.model("tour", TourSchema, "tours");

module.exports = TourModel;
