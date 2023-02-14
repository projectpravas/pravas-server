const {
  createOrder,
  verifyOrder,
} = require("../controllers/bookingOrders.controller");

const router = require("express").Router();

router.post("/create-order", createOrder);
router.post("/verify-order", verifyOrder);

module.exports = router;
