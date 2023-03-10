const router = require("express").Router();

const { createBlog, getAllBlogs } = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);

router.post("/new", createBlog);

module.exports = router;
