const router = require("express").Router();

const {
  getCurrencies,
  getCurrenciesById,
} = require("../controllers/currencies.controller");

router.get("/", getCurrencies);
router.get("/:id", getCurrenciesById);

module.exports = router;
