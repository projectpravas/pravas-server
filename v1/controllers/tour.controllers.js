const TourModel = require("../modules/tour.model");
const UserModel = require("../modules/user.model");

class TourCtrl {
  static createTour(req, res) {
    const tourObj = req?.body;

    if (tourObj?.duration) tourObj.duration = JSON.parse(tourObj?.duration);
    if (tourObj?.tourPlan) tourObj.tourPlan = JSON.parse(tourObj?.tourPlan);

    console.log(tourObj);

    if (req?.files?.images)
      tourObj.images = req?.files?.images.map(
        (file) => `tour-images/${file?.filename}`
      );

    new TourModel(tourObj)
      .save()
      .then((result) => {
        res.status(201).send({ message: "Tour Created...", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: "Tour couldn't Created...", error: err });
      });
  }

  static updateTour(req, res) {
    const tourObj = req?.body;

    if (req?.files?.images)
      tourObj.images = req?.files?.images.map(
        (file) => `tour-images/${file?.filename}`
      );

    TourModel.updateOne({ _id: tourObj?._id }, tourObj, { new: true })
      .then((result) => {
        res
          .status(200)
          .send({ message: "Tour updated successfully...", data: result });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Tour couldn't updated successfully...",
          error: err,
        });
      });
  }

  // PravasiModel.updateMany({}, { $pull: { tours: `${id}` } }), /// to delete tourId
  // PravasiModel.updateMany({"tours":"old_id"},{$set:{"tours.$":"new_id"}}) // to replace tourId
  static deleteTour(req, res) {
    const { id } = req?.params;

    TourModel.deleteOne({ _id: id })
      .then((result) => {
        UserModel.updateMany({}, { $pull: { tours: `${id}` } })
          .then((response) => {
            res.status(200).send({
              message: "Tour deleted and record cleared...",
              data: null,
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(400).send({
              message: "Tour deleted but couldn't clear record ",
              error: err,
            });
          });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Tour Couldn't deleted Successfully..",
          error: err,
        });
      });
  }

  static getOneTour(req, res) {
    const { id } = req?.params;

    TourModel.findOne({ _id: id })
      .then((result) => {
        res
          .status(200)
          .send({ message: "Tour fetched Successfully..", data: result });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Tour Couldn't fetched Successfully..",
          error: err,
        });
      });
  }

  static getAllTour(req, res) {
    const { query } = req?.query;

    TourModel.find()
      .then((result) => {
        res
          .status(200)
          .send({ message: "Tours fetched Successfully..", data: result });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Tours Couldn't fetched Successfully..",
          error: err,
        });
      });
  }
}

module.exports = TourCtrl;
