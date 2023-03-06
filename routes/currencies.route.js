const router = require("express").Router();

const {
  getCurrencies,
  getCurrenciesById,
} = require("../controllers/currencies.controller");

router.get("/currencies", getCurrencies);
router.get("/currencies/:id", getCurrenciesById);


module.exports = router;
