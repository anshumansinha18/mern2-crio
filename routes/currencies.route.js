const router = require("express").Router();

const {
  getCurrencies,
  getCurrenciesById,
} = require("../controllers/currencies.controller");

const { validateSearchQuery } = require("../middleware/validateSearchQuery");
router.get("/", getCurrencies);
router.get("/:id", getCurrenciesById);

module.exports = router;
