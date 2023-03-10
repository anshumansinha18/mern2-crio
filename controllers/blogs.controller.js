const { request } = require("express");
const { findOneAndUpdate } = require("../models/blogs.model");
const Blogs = require("../models/blogs.model");

const createBlog = async (request, response) => {
  try {
    const body = request.body;
    console.log(body);
    const newDocument = new Blogs({
      title: body.title,
    }); //Creates the new document but doesn't save it.

    await newDocument.save(); //Saves the document in mongodb database and it is an asynchronous call
    console.log(newDocument);
    response.sendStatus(200);
  } catch (err) {
    console.log(err);
    response.sendStatus(500);
  }
};

const getAllBlogs = async (request, response) => {
  const data = await Blogs.find({});
  response.json(data);
};

const deleteBlogWithId = async (request, response) => {
  try {
    const { id } = request.params;
    console.log(id);
    const result = await Blogs.findOneAndDelete({ _id: id });
    response.json(result);
  } catch (err) {
    response.status(500).json({ message: "COuld not delete" });
  }
};

const updateBlogWithId = async (request, response) => {
  const { id } = request.params;
  console.log(id, request.body);
  try {
    const body = request.body;
    const result = await Blogs.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log(result);
    response.json(result);
  } catch (err) {
    response.json({ message: "Could Not find the data" }).status(500);
  }
};
module.exports = {
  getAllBlogs,
  createBlog,
  deleteBlogWithId,
  updateBlogWithId,
};
