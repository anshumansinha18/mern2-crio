const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  author: [String],
  content: String,
  publishedAt: Date,
});

const blogsModel = mongoose.model("Blogs", blogSchema);

module.exports = blogsModel;
