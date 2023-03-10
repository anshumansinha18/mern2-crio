const mongoose = require("mongoose");
const validator = require("validator");

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

        //VALIDATION USING REGEX
        //------------------------
        // const re =
        //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if (re.test(newValue)) {
        //   return true;
        // } else {
        //   return false;
        // }

        //VALIDATION USING VALIDATOR NPM PACKAGE
        //-------------------------------------

        if (validator.isEmail(newValue)) return true;
        else return false;
      },
    },
    image: {
      type: String,
      validate: (newValue) => {
        if (validator.isURL(newValue)) return true;
        else return false;
      },
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
