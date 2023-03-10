const router = require("express").Router();

const { createBlog } = require("../controllers/blogs.controller");

router.get("/", createBlog);

module.exports = router;
