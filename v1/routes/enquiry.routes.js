const router = require("express").Router();
const {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiries,
  getOneEnquiry,
  updateEnquiry,
} = require("../controllers/enquiry.controller");

router.get("/", authorize(["admin", "superAdmin"]), getAllEnquiries);
router.get("/:id", authorize(["admin", "superAdmin"]), getOneEnquiry);
router.delete("/:id", authorize(["admin", "superAdmin"]), deleteEnquiry);
router.post("/", authorize(["admin", "superAdmin", "customer"]), createEnquiry);
router.put("/:id", authorize(["admin", "superAdmin"]), updateEnquiry);

module.exports = router;
