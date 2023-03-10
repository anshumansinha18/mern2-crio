const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 25,
    },
    twitterHandle: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: (newValue) => {
        //the name of the function should always be validate
        //Logic for validation
        //function should return true or false
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(newValue)) {
          return true;
        } else {
          return false;
        }
      },
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
