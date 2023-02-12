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

router.get("/", getAllBlogs);
router.get("/:id", getOneBlog);
router.delete("/:id", deleteBlog);
router.put("/:id", upload.single("image"), updateBlog);
router.post("/", upload.single("image"), createBlog);

module.exports = router;
