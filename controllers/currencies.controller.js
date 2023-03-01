const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (min_value) {
    res.json(jsonData.data.filter((ele) => Number(ele.min_size) >= min_value));
    res.status(200);
  } else {
    res.json(jsonData);
  }
};



module.exports = getCurrencies;