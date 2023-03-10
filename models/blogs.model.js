const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxLenght: 25,
    },
    twitterHandle: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      maxLenght: 50,
    },
    image: {
      type: String,
    },
  },
  {
    _id: false,
  }
);

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: [authorSchema],
    },
    content: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

//TIMESTAMPS TELLS WHEN THE DATA WAS UPDATED.

const blogsModel = mongoose.model("Blogs", blogSchema);

module.exports = blogsModel;
