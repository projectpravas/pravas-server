const router = require("express").Router();
const {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiries,
  getOneEnquiry,
  updateEnquiry,
} = require("../controllers/enquiry.controller");

router.get("/", getAllEnquiries);
router.get("/:id", getOneEnquiry);
router.delete("/:id", deleteEnquiry);
router.post("/", createEnquiry);
router.put("/:id", updateEnquiry);

module.exports = router;
