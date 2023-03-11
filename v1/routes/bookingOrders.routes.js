const {
  createOrder,
  verifyOrder,
  getPaymentHistory,
  refund,
} = require("../controllers/bookingOrders.controller");
const authorize = require("../helpers/middlewares/authorization");

const router = require("express").Router();

router.post("/create-order", createOrder);
router.post("/verify-order", verifyOrder);
router.post(
  "/payment-history",
  authorize(["admin", "superAdmin"]),
  getPaymentHistory
);
router.post("/refund", authorize(["admin", "superAdmin"]), refund);

module.exports = router;
