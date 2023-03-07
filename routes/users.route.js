const router = require("express").Router();

const {
  getUsersData,
  getUserById,
  getUserBySearch,
} = require("../controllers/users.controller");

const { validateSearchQuery } = require("../middleware/validateSearchQuery");

router.get("/", getUsersData);
router.get("/search", validateSearchQuery, getUserBySearch);
router.get("/:uuid", getUserById);

module.exports = router;
