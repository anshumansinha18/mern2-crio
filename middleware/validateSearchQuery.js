const Joi = require("joi");
const schema = Joi.object().keys({
  age: Joi.number().integer().min(0).max(100),
  gender: Joi.string().valid("male", "female"),
});

const validateSearchQuery = (req, res, next) => {
  const { age, gender } = req.query;
  const result = schema.validate({ age, gender });

  if (result.error) {
    res.json(result.error).status(422);
  } else return next();
};

module.exports = {
  validateSearchQuery,
};
