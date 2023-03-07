//ROUTES
require("dotenv").config();
const express = require("express");
const { getCurrenciesById } = require("./controllers/currencies.controller");
const app = express();

const port = 8081;

const currenciesRoute = require("./routes/currencies.route");
const usersRoute = require("./routes/users.route");

const { verifyAuth } = require("./middleware/verifyAuth");

app.use(verifyAuth);

app.use("/currencies", currenciesRoute);
app.use("/users", usersRoute);

app.listen(port, () => {
  console.log("Listening on Port", 8081);
});
