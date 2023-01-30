const UserModel = require("../modules/user.model");
const messages = require("../helpers/messages");
const { encrypt } = require("../helpers/encryption");
const { userFilter, userFilterArray } = require("../helpers/user-utilities");

class UserCtrl {
  static createUser(req, res) {
    const user = req.body;

    if (req?.file) user.avatar = `user-profiles/${req?.file?.filename}`;
    if (user?.password) user.password = encrypt(user?.password);

    user.userActivityDetails = {
      userTimeStamp: Date.now(),
      sentEmailTimeStamp: 0,
      passwordTimeStamp: 0,
    };

    new UserModel(user)
      .save()
      .then((result) => {
        res.status(201).send({
          message: messages?.userMessages?.created,
          data: userFilter(result),
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: messages?.userMessages?.notCreated, error: err });
      });
  } //createUser

  static updateUser(req, res) {
    const { id } = req?.params;
    const user = req.body;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.userId = Number(id);
    }

    if (req.file) user.avatar = `user-profiles/${req?.file?.filename}`;
    if (user?.password) user.password = encrypt(user?.password);

    UserModel.updateOne(filter, user, { new: true })
      .then((result) => {
        res.status(200).send({
          message: messages?.userMessages?.updated,
          data: userFilter(result),
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: messages?.userMessages?.notUpdated, error: err });
      });
  } //updateUser

  static deleteUser(req, res) {
    const { id } = req?.params;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.userId = Number(id);
    }

    UserModel.deleteOne(filter)
      .then((result) => {
        res.status(200).send({
          message: messages?.userMessages?.deleted,
          data: userFilter(result),
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ message: messages?.userMessages?.notDeleted, error: err });
      });
  } //deleteUser

  static getOneUser(req, res) {
    const { id } = req?.params;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.userId = Number(id);
    }

    UserModel.findOne(filter)
      .populate("tours")
      .then((result) => {
        if (result._id == undefined) {
          res.status(404).send({
            message: messages?.userMessages?.userNotAvailable,
            data: null,
          });
          return;
        }

        res.status(200).send({
          message: messages?.userMessages?.getOne,
          data: userFilter(result),
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: messages?.userMessages?.notGetOne, error: err });
      });
  } //getOneUser

  static getAllUsers(req, res) {
    const { role } = req.query;

    const filter = {};

    if (role) filter.role = role;

    UserModel.find(filter)
      .populate("tours")
      .then((result) => {
        if (result.length == 0) {
          res.status(404).send({
            message: messages?.userMessages?.usersNotAvailable,
            data: null,
          });
          return;
        }

        res.status(200).send({
          message: messages?.userMessages?.getAll,
          // data: result,
          data: userFilterArray(result),
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ message: messages?.userMessages?.notGetAll, error: err });
      });
  } //getAllUsers
}

module.exports = UserCtrl;