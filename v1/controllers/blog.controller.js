const BlogModel = require("../modules/blog.model");

class BlogCtrl {
  static createBlog(req, res) {
    const blog = req.body;

    if (req?.file) blog.image = `blog-images/${req?.file?.filename}`;

    new BlogModel(blog)
      .save()
      .then((result) => {
        res.status(201).send({
          message: "Blog created successully...",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Blog couldn't created successully...",
          error: err,
        });
      });
  } //createBlog

  static updateBlog(req, res) {
    const { id } = req?.params;
    const blog = req.body;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.blogId = Number(id);
    }

    if (req.file) blog.image = `blog-images/${req?.file?.filename}`;

    BlogModel.updateOne(filter, blog, { new: true })
      .then((result) => {
        res.status(200).send({
          message: "Blog updated successully...",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Blog couldn't updated successully...",
          error: err,
        });
      });
  } //updateBlog

  static deleteBlog(req, res) {
    const { id } = req?.params;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.blogId = Number(id);
    }

    BlogModel.deleteOne(filter)
      .then((result) => {
        res.status(200).send({
          message: "Blog deleted successully...",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "Blog couldn't deleted successully...",
          error: err,
        });
      });
  } //deleteBlog

  static getOneBlog(req, res) {
    const { id } = req?.params;

    const filter = {};

    if (Number(id).toString() == "NaN") {
      filter._id = id;
    } else {
      filter.blogId = Number(id);
    }

    BlogModel.findOne(filter)
      .then((result) => {
        if (result._id == undefined) {
          res.status(404).send({
            message: "Blog not available",
            data: null,
          });
          return;
        }

        res.status(200).send({
          message: "Blog fetched successfully...",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send({
          message: "Blog couldn't fetched successfully...",
          error: err,
        });
      });
  } //getOneBlog

  static getAllBlogs(req, res) {
    const { status } = req?.query;

    const filter = {};

    if (status) filter.status = status;

    BlogModel.find(filter)

      .then((result) => {
        if (result.length == 0) {
          res.status(404).send({
            message: "Blogs not available...",
            data: null,
          });
          return;
        }

        res.status(200).send({
          message: "Blogs fetched successfully...",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send({
          message: "Blog couldn't fetched successfully...",
          error: err,
        });
      });
  } //getAllBlogs
}

module.exports = BlogCtrl;
