const messages = require("../helpers/messages");
const EnquiryModel = require("../modules/enquiry.model");
class EnquiryCtrl {
  static createEnquiry(req, res) {
    const enq = req.body;
    EnquiryModel.create(enq)
      .then((result) => {
        res
          .status(201)
          .send({ message: messages.enquiryMessages.created, data: result });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: messages.enquiryMessages.notCreated, error: err });
      });
  } //createEnquiry;

  static updateEnquiry(req, res) {
    const { id } = req?.params;
    const enq = req.body;
    console.log(enq);
    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.enquiryId = Number(id);
    }

    EnquiryModel.updateOne(filter, enq, { new: true })
      .then((result) => {
        res
          .status(200)
          .send({ message: messages?.enquiryMessages?.updated, data: result });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: messages.enquiryMessages.notUpdated, error: err });
      });
  } //updateEnquiry;

  static deleteEnquiry(req, res) {
    const { id } = req?.params;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.enquiryId = Number(id);
    }
    EnquiryModel.deleteOne(filter)
      .then((result) => {
        res
          .status(200)
          .send({ message: messages.enquiryMessages.deleted, data: result });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: messages.enquiryMessages.notDeleted, error: err });
      });
  } //deleteEnquiry

  static getOneEnquiry(req, res) {
    const { id } = req?.params;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.enquiryId = Number(id);
    }

    EnquiryModel.findOne(filter)
      .then((result) => {
        if (result._id == undefined) {
          res.status(404).send({
            message: messages?.enquiryMessages?.enquiryNotAvailable,
            data: null,
          });
          return;
        }

        res.status(200).send({
          message: messages?.enquiryMessages?.getOne,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: messages?.enquiryMessages?.notGetOne, error: err });
      });
  } //getOneEnquiry

  static getAllEnquiries(req, res) {
    EnquiryModel.find()
      .then((result) => {
        if (result.length == 0) {
          res.status(404).send({
            message: messages?.enquiryMessages?.usersNotAvailable,
            data: null,
          });
          return;
        }

        res.status(200).send({
          message: messages?.enquiryMessages?.getAll,
          data: result,
          //   data: userFilterArray(result),
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: messages?.enquiryMessages?.notGetAll, error: err });
      });
  } //getAllEnquiries
}

module.exports = EnquiryCtrl;
