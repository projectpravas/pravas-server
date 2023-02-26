const TourModel = require("../modules/tour.model");
const UserModel = require("../modules/user.model");
class TourCtrl {
  static createTour(req, res) {
    const tourObj = req?.body;

    if (tourObj?.duration) tourObj.duration = JSON.parse(tourObj?.duration);
    if (tourObj?.tourPlan) tourObj.tourPlan = JSON.parse(tourObj?.tourPlan);

    if (req?.files?.images)
      tourObj.images = req?.files?.images.map(
        (file) => `tour-images/${file?.filename}`
      );

    new TourModel(tourObj)
      .save()
      .then((result) => {
        res.status(201).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } Created...`,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } couldn't Created...`,
          error: err,
        });
      });
  }

  static updateTour(req, res) {
    const { id } = req?.params;
    let tourObj = req?.body;
    // console.log(tourObj);
    if (tourObj?.duration) tourObj.duration = JSON.parse(tourObj?.duration);
    if (tourObj?.tourPlan) tourObj.tourPlan = JSON.parse(tourObj?.tourPlan);

    if (req?.files?.images)
      tourObj.images = req?.files?.images.map(
        (file) => `tour-images/${file?.filename}`
      );

    TourModel.updateOne({ _id: id }, tourObj, { new: true })
      .then((result) => {
        res.status(200).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } updated successfully...`,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } couldn't updated successfully...`,
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
              message: `${
                res?.data?.data?.category == "package" ? "Package" : "Tour"
              } deleted and record cleared...`,
              data: null,
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(400).send({
              message: `${
                res?.data?.data?.category == "package" ? "Package" : "Tour"
              } deleted but couldn't clear record`,
              error: err,
            });
          });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } Couldn't deleted Successfully..`,
          error: err,
        });
      });
  }

  static getOneTour(req, res) {
    const { id } = req?.params;

    TourModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } fetched Successfully..`,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: `${
            res?.data?.data?.category == "package" ? "Package" : "Tour"
          } Couldn't fetched Successfully..`,
          error: err,
        });
      });
  }

  static getAllTour(req, res) {
    const { category, packageId, tourLocation, tourType } = req?.query;

    const filter = {};

    category && (filter.category = category);
    tourLocation && (filter.tourLocation = tourLocation);
    tourType && (filter.tourType = tourType);
    if (packageId) filter.packageId = packageId;

    TourModel.find(filter)
      .then((result) => {
        res.status(200).send({
          message: `${
            category == "package" ? "Packages" : "Tours"
          } fetched Successfully..`,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: `${
            category == "package" ? "Packages" : "Tours"
          } Couldn't fetched Successfully..`,
          error: err,
        });
      });
  }

  static updateReview(req, res) {
    const { id } = req?.params;
    let reviewObj = req?.body;

    TourModel.updateOne(
      { _id: id },
      [
        {
          $set: {
            feedbacks: {
              $cond: [
                { $in: [reviewObj.pravasiId, "$feedbacks.pravasiId"] },
                {
                  $map: {
                    input: "$feedbacks",
                    in: {
                      $mergeObjects: [
                        "$$this",
                        {
                          $cond: [
                            { $eq: ["$$this.pravasiId", reviewObj.pravasiId] },
                            reviewObj,
                            {},
                          ],
                        },
                      ],
                    },
                  },
                },
                { $concatArrays: ["$feedbacks", [reviewObj]] },
              ],
            },
          },
        },
      ],
      { new: true, upsert: true }
    )
      .then((result) => {
        res.status(200).send({
          message: `Review updated successfully`,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: `Could not update review`,
          error: err,
        });
      });
  }

  static getUpcomingTours(req, res) {
    const { packageId } = req?.params;

    const filter = {
      $and: [
        { category: `tour` },
        { packageId: `${packageId}` },
        { tourDate: { $gte: new Date() } },
      ],
    };

    TourModel.find(filter)
      .then((result) => {
        res
          .status(200)
          .send({ message: "Upcoming Tours fetched..", data: result });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: "Upcoming Tours couldn't fetched..", error: err });
      });
  }
}

module.exports = TourCtrl;

// db.tours.find({$and:[{category:"tour"}, {packageId:"63eca9cec31d6854becdbcad"},{tourDate:{$gte:new Date}}]}).pretty()
