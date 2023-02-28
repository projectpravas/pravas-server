const UserModel = require("../modules/user.model");
const messages = require("../helpers/messages");
const { encrypt } = require("../helpers/encryption");
const { userFilter, userFilterArray } = require("../helpers/user-utilities");
const { isValidObjectId } = require("../helpers/mongoIdValidator");

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
    console.log(user);
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
      .populate("wishlist")
      .then((result) => {
        if (result?._id == undefined) {
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
    const { role, mobile } = req.query;

    const filter = {};

    if (role) filter.role = role;
    if (mobile) filter.mobile = new RegExp(`^${mobile}`, "g");

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

  static async isValidUserId(req, res) {
    const testArr = req?.body;

    if (Array.isArray(testArr)) {
      const resultArr = [];
      for (const testcase of testArr) {
        if (isValidObjectId(testcase)) {
          const user = await UserModel.findOne({ _id: testcase });
          if (user?._id) {
            resultArr.push(user);
          } else resultArr.push(testcase);
        } else resultArr.push(testcase);
      }
      res.status(200).send({ message: "tested", data: resultArr });
    } else {
      res.status(500).send({ message: "Couldn't tested", error: null });
    }
  } //validIdChecker

  static addRemoveTourId(req, res) {
    const { userId, op, tourId } = req?.body;

    const filter = {};

    if (Number(userId).toString() == "NaN") {
      filter._id = userId;
    } else {
      filter.userId = Number(userId);
    }

    if (op == "add") {
      UserModel.updateOne(
        filter,
        { $addToSet: { tours: tourId } },
        { new: true }
      )
        .then((result) => {
          res
            .status(200)
            .send({ message: "Tour Added into your account", data: result });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            message: "Tour Couldn't Added into your account",
            error: err,
          });
        });
    } else {
      //remove
      UserModel.updateOne(
        filter,
        { $pull: { tours: `${tourId}` } },
        { new: true }
      )
        .then((result) => {
          res
            .status(200)
            .send({ message: "Tour Removed from your account", data: result });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            message: "Tour Couldn't Removed from your account",
            error: err,
          });
        });
    }
  } //addRemoveTourId

  static addRemoveWishlist(req, res) {
    const { userId, op, tourId } = req?.body;

    const filter = {};

    if (Number(userId).toString() == "NaN") {
      filter._id = userId;
    } else {
      filter.userId = Number(userId);
    }

    if (op == "add") {
      UserModel.updateOne(
        filter,
        { $addToSet: { wishlist: `${tourId}` } },
        { new: true }
      )
        .then((result) => {
          res
            .status(200)
            .send({ message: "Tour Added into your wishlist", data: result });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            message: "Couldn't Add tour into your wishlist",
            error: err,
          });
        });
    } else {
      //remove
      UserModel.updateOne(
        filter,
        { $pull: { wishlist: `${tourId}` } },
        { new: true }
      )
        .then((result) => {
          res
            .status(200)
            .send({ message: "Tour Removed from your wishlist", data: result });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            message: "Couldn't Removed tour from your wishlist",
            error: err,
          });
        });
    }
  }
}

module.exports = UserCtrl;
