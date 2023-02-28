//HANDLING REQUEST USING EXPRESS:
// const express = require("express");
// const app = express();

// const PORT = 8081;

// const jsonData = require("./response.json");

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/currencies", (req, res) => {
//   res.json(jsonData);
// });

// app.listen(PORT, () => {
//   console.log("App running on port", PORT);
// });

//REQUEST PARAMS: HANDLING ROUTES

const express = require("express");
const app = express();
const port = 8081;
const jsonData = require("./response.json");

app.get("/currencies/:symbol", (req, res) => {
  const symbol = req.params.symbol;
  const data = jsonData.data.find((ele) => ele.id === symbol.toUpperCase());
  if (data) {
    res.json(data);
    res.status(200).end();
  } else {
    res.json({ message: "Invalid Symbol" });
    res.status(400).end();
  }
});

app.listen(port, () => {
  console.log("Listening on PORT", port);
});
