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

module.exports = {
  createBlog,
};
