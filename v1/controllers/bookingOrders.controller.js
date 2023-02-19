const Razorpay = require("razorpay");
require("dotenv").config({ path: "./.env" });
const crypto = require("crypto");

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

  static verifyOrder(req, res) {
    const idObj = req?.body;

    let sign = idObj?.razorpay_order_id + "|" + idObj?.razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.razorPayKey)
      .update(sign.toString())
      .digest("hex");

    if (expectedSignature === idObj?.razorpay_signature) {
      //on successs
      res.status(200).send({ message: "Payment Successful", data: true });
    } else {
      //on error
      res.status(500).send({ message: "Payment Failed", error: false });
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
