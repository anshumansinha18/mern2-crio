const Blogs = require("../models/blogs.model");

const createBlog = async (request, response) => {
  const newDocument = new Blogs({
    title: "First Blog",
  }); //Creates the new document but doesn't save it.

  await newDocument.save(); //Saves the document in mongodb database and it is an asynchronous call
  console.log(newDocument);
  response.sendStatus(200);
};

module.exports = {
  createBlog,
};
