const router = require("express").Router();

const { createBlog } = require("../controllers/blogs.controller");

router.get("/", createBlog);

router.post("/", createBlog);

module.exports = router;
