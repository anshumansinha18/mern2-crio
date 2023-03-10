const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: [String],
  },
  content: {
    type: String,
    default: "",
  },
  publishedAt: {
    type: Date,
    default: null,
  },
});

const blogsModel = mongoose.model("Blogs", blogSchema);

module.exports = blogsModel;
