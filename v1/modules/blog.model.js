const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const BlogSchema = new mongoose.Schema({
  blogId: Number,
  title: String,
  richText: String,
  seoTitle: String,
  metaDescription: String,
  focusKeyphrases: String,
  slug: String,
  categories: Array,
  tags: Array,
  image: String,
  blogStatus: Boolean,
  creationDate: String,
});

BlogSchema.plugin(AutoIncrement, { inc_field: "blogId" });

const BlogModel = mongoose.model("blog", BlogSchema, "blogs");

module.exports = BlogModel;
