const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const BlogSchema = new mongoose.Schema({
  blogId: Number,
  title: String,
});

BlogSchema.plugin(AutoIncrement, { inc_field: "blogId" });

const BlogModel = mongoose.model("blog", BlogSchema, "blogs");

module.exports = BlogModel;
