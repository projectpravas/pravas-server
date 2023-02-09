const router = require("express").Router();
const {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiries,
  getOneEnquiry,
  updateEnquiry,
} = require("../controllers/enquiry.controller");

router.post("/", createEnquiry);
router.put("/:id", updateEnquiry);
router.delete("/:id", deleteEnquiry);
router.get("/:id", getOneEnquiry);
router.get("/", getAllEnquiries);

module.exports = router;
