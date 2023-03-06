const jsonData = require("../response.json");
const Joi = require("joi");

const PASSWORD = "LetMeIn";

const schema = Joi.object().keys({
  min_value: Joi.number().min(0),
});

const validateData = (input) => {
  const result = schema.validate(input);
  return result.error;
};

const verifyPassword = (req) => {
  const { authorization } = req.headers;
  if (authorization && authorization === PASSWORD) {
    return true;
  } else return false;
};

const getCurrencies = (req, res) => {
  if (!verifyPassword(req)) {
    return res.sendStatus(403);
  }
  const { min_value } = req.query;
  const error = validateData({ min_value });
  if (error) {
    return res.send(error).status(404);
  }
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
