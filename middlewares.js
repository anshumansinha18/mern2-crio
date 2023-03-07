const express = require("express");
const app = express();
const port = 8082;

function middleware(req, res, next) {
  req.something = "Something else";
  console.log("hi i am anshuman");
  next(); //Remove next() to see what happens. (Next middleware will not be executed at all which is controller for /create-user).
}

app.use(middleware);  //THIS IS LIKE A GLOBAL MIDDLEWARE. IF REQUEST COMES FROM ANY URL TO THIS SERVER, THEN THIS WILL GET CALLED.

app.get("/create-user", (req, res) => {
  res.send(req.something);
});

app.get("/delete-user", (req, res) => {
  res.send("User Deleted");
});

app.listen(port, () => {
  console.log("Listening on PORT", port);
});
