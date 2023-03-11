const router = require("express").Router();
const multer = require("multer");
const { extname } = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "v1/uploads/user-profiles");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const {
  createUser,
  deleteUser,
  updateUser,
  getOneUser,
  getAllUsers,
  isValidUserId,
  addRemoveTourId,
  addRemoveWishlist,
} = require("../controllers/user.controller");
const authorize = require("../helpers/middlewares/authorization");

router.get("/", authorize(["superAdmin"]), getAllUsers);
router.get("/:id", authorize(["admin", "superAdmin"]), getOneUser);
router.delete("/:id", authorize(["superAdmin"]), deleteUser);
router.put(
  "/:id",
  authorize(["admin", "superAdmin", "customer"]),
  upload.single("avatar"),
  updateUser
);
router.post(
  "/",
  authorize(["admin", "superAdmin", "customer"]),
  upload.single("avatar"),
  createUser
);
router.post(
  "/isvalidId",
  authorize(["admin", "superAdmin", "customer"]),
  isValidUserId
);
router.post(
  "/add-remove-tourId",
  authorize(["admin", "superAdmin"]),
  addRemoveTourId
);
router.post(
  "/add-remove-wishlist",
  authorize(["admin", "superAdmin", "customer"]),
  addRemoveWishlist
);

module.exports = router;
