const {
  createOrder,
  verifyOrder,
  getPaymentHistory,
} = require("../controllers/bookingOrders.controller");

const router = require("express").Router();

router.post("/create-order", createOrder);
router.post("/verify-order", verifyOrder);
router.post("/payment-history", getPaymentHistory);

module.exports = router;
