const router = require("express").Router();

const {
  createBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
  searchBlogs,
} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);

router.get("/search", searchBlogs);

router.post("/new", createBlog);

router.delete("/:id", deleteBlogWithId);

router.patch("/:id", updateBlogWithId);

module.exports = router;
