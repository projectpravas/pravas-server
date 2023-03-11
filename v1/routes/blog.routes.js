const router = require("express").Router();
const multer = require("multer");
const { extname } = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "v1/uploads/blog-images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const {
  createBlog,
  deleteBlog,
  updateBlog,
  getOneBlog,
  getAllBlogs,
} = require("../controllers/blog.controller");
const authorize = require("../helpers/middlewares/authorization");

router.get("/", getAllBlogs);
router.get("/:id", getOneBlog);
router.delete("/:id", authorize(["admin", "superAdmin"]), deleteBlog);
router.put(
  "/:id",
  authorize(["admin", "superAdmin"]),
  upload.single("image"),
  updateBlog
);
router.post(
  "/",
  authorize(["admin", "superAdmin"]),
  upload.single("image"),
  createBlog
);

module.exports = router;
