//ROUTES

const express = require("express");
const { getCurrenciesById } = require("./controllers/currencies.controller");
const app = express();

const port = 8081;

const currenciesRoute = require("./routes/currencies.route");

//if request param contains /currencies, then use currenciesRoute
app.use("/currencies", currenciesRoute);
//NOW THIS CODE WILL GIVE YOU ERROR BECAUSE NOW IT WILL LOOK FOR /currencies/currencies which is not defined in the routes.
// http://localhost:8081/currencies/ -- fails
// http://localhost:8081/currencies/currencies - gives the result.
app.listen(port, () => {
  console.log("Listening on Port", 8081);
});
