//ROUTES
require("dotenv").config();
const currenciesRoute = require("./routes/currencies.route");
const usersRoute = require("./routes/users.route");
const blogsRoute = require("./routes/blogs.route");
const { verifyAuth } = require("./middleware/verifyAuth");
const express = require("express");
const { getCurrenciesById } = require("./controllers/currencies.controller");

const DB_URI = "mongodb://127.0.0.1:27017/website";

const mongoose = require("mongoose");

mongoose
  .connect(`${DB_URI}`)
  .then(() => {
    console.log("Connected to DB at", DB_URI);
  })
  .catch(() => console.log("Failed to connect to DB"));

const app = express();

const port = 8081;

app.use(verifyAuth);

app.use("/currencies", currenciesRoute);
app.use("/users", usersRoute);
app.use("/blogs", blogsRoute);

app.listen(port, () => {
  console.log("Listening on Port", 8081);
});
