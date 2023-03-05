const jsonData = require("../response.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (min_value) {
    res.json(jsonData.data.filter((ele) => Number(ele.min_size) >= min_value));
    res.status(200);
  } else {
    res.json(jsonData);
  }
};

const getCurrenciesById = (req, res) => {
  console.log("hi");
  const { id } = req.params;
  console.log(id);
  if (id) {
    const resData = jsonData.data.find((ele) => ele.id === id.toUpperCase());
    res.json(resData);
    res.status(200).end();
  } else {
    res.json({ message: "Invalid Symbol" });
    res.status(404);
  }
};

module.exports = {
  getCurrencies,
  getCurrenciesById,
};
