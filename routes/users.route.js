const router = require("express").Router();

const {
  getUsersData,
  getUserById,
  getUserBySearch,
} = require("../controllers/users.controller");

router.get("/", getUsersData);
router.get("/search", getUserBySearch);
router.get("/:uuid", getUserById);

module.exports = router;
