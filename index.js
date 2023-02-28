//HANDLING REQUEST USING EXPRESS:
const express = require("express");
const app = express();

const PORT = 8081;

const jsonData = require("./response.json");

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/currencies", (req, res) => {
  res.json(jsonData);
});

app.listen(PORT, () => {
  console.log("App running on port", PORT);
});
