const Razorpay = require("razorpay");
require("dotenv").config({ path: "./.env" });
const crypto = require("crypto");
const TourModel = require("../modules/tour.model");
const UserModel = require("../modules/user.model");

class BookingCtrl {
  static createOrder(req, res) {
    const { amount } = req?.body;

    const instance = new Razorpay({
      key_id: process.env.razorPayId,
      key_secret: process.env.razorPayKey,
    });

    const options = {
      amount: Number(amount) * 100, // amount in the smallest currency unit like paisa for india
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    instance.orders.create(options, function (err, order) {
      // on error
      if (err) {
        console.error(err);
        return res
          .status(500)
          .send({ message: "Order couldn't created", error: err });
      }
      //on success
      return res.status(200).send({ message: "Order created", data: order });
    });
  }

  static async verifyOrder(req, res) {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      tourId,
      customerId,
    } = req?.body;

    let sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.razorPayKey)
      .update(sign.toString())
      .digest("hex");
    if (tourId && customerId) {
      const tour = await TourModel.findOne({ _id: tourId });

      if (tour?.participants?.length < Number(tour?.maxPersons)) {
        if (
          !tour?.participants
            .find((v) => v.split("/").includes(`${customerId}`))
            ?.split("/")[0]
        ) {
          if (expectedSignature === razorpay_signature) {
            //on successs
            const tourModified = await TourModel.updateOne(
              { _id: tourId },
              { $push: { participants: `${customerId}/online` } },
              { new: true }
            );
            const userModified = await UserModel.updateOne(
              { _id: customerId },
              { $addToSet: { tours: tourId } },
              { new: true }
            );

            const updatedTours = await TourModel.findOne({ _id: tourId });
            const updatedUsers = await UserModel.findOne({ _id: customerId });

            if (
              updatedTours?.participants
                ?.find((v) => v.split("/")?.includes(`${customerId}`))
                ?.split("/")[0] &&
              updatedUsers?.tours?.includes(`${tourId}`)
            ) {
              res
                .status(200)
                .send({ message: "Payment Successful", data: true });
            } else {
              TourModel.updateOne(
                { _id: tourId },
                { $pull: { participants: `${customerId}/online` } }
              );
              UserModel.updateOne(
                { _id: customerId },
                { $pull: { tours: tourId } }
              );

              res
                .status(500)
                .send({ message: "Contact to pravas", error: false });
            }
          } else {
            //on error
            res.status(500).send({ message: "Payment Failed", error: false });
          }
        } else {
          res.status(500).send({
            message: "You Already have Booked for this Tour",
            error: false,
          });
        }
      } else {
        res.status(500).send({
          message: "Sorry... Tour bookings are full, Try Next scheduled Tour",
          error: false,
        });
      }
    } else {
      res.status(500).send({ message: "Try again Server error", error: false });
    }
  }

  static getPaymentHistory(req, res) {
    const { from, to, last } = req?.body;

    const Razorpay = require("razorpay");
    const razorpay = new Razorpay({
      key_id: process.env.razorPayId,
      key_secret: process.env.razorPayKey,
    });

    razorpay.payments.all(
      { from: from, to: to, count: Number(last) },
      function (error, response) {
        if (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "Couldn't get payment history", error: error });
        } else {
          res.status(200).send({
            message: "Payment history fetched Successfully",
            data: response?.items,
          });
          console.log(response?.items);
        }
      }
    );
  }
}

module.exports = BookingCtrl;
