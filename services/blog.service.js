const Blogs = require("../models/blogs.model");


const findAllBlogs = async () => {
  return await Blogs.find({});
};

const createBlogDocument = async (body) => {
  const newDocument = new Blogs(body);
  await newDocument.save();
};

module.exports = {
  findAllBlogs,
  createBlogDocument,
};
