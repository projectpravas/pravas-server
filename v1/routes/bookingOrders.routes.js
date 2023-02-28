const {
  createOrder,
  verifyOrder,
  getPaymentHistory,
  refund,
} = require("../controllers/bookingOrders.controller");

const router = require("express").Router();

router.post("/create-order", createOrder);
router.post("/verify-order", verifyOrder);
router.post("/payment-history", getPaymentHistory);
router.post("/refund", refund);

module.exports = router;
