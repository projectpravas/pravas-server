const router = require("express").Router();
const multer = require("multer");
const { extname } = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "v1/uploads/tour-images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const {
  createTour,
  updateTour,
  deleteTour,
  getOneTour,
  getAllTour,
  getUpcomingTours,
  updateReview,
} = require("../controllers/tour.controllers");
const authorize = require("../helpers/middlewares/authorization");

router.get("/", getAllTour);
router.get("/:id", getOneTour);
router.get("/upcoming-tours/:packageId", getUpcomingTours);
router.delete("/:id", authorize(["admin", "superAdmin"]), deleteTour);

router.put(
  "/:id",
  authorize(["admin", "superAdmin"]),
  upload.fields([{ name: "images", maxCount: 10 }]),
  updateTour
);
router.put(
  "/update-review/:id",
  authorize(["admin", "superAdmin", "customer"]),
  updateReview
);

router.post(
  "/",
  authorize(["admin", "superAdmin"]),
  upload.fields([{ name: "images", maxCount: 10 }]),
  createTour
);

module.exports = router;
