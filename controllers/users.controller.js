const { json } = require("express");
const jsonData = require("../users.json");

const getUsersData = (req, res) => {
  res.json(jsonData);
  res.status(200);
};

const getUserById = (req, res) => {
  const { uuid } = req.params;
  if (uuid) {
    const resData = jsonData.data.find((ele) => ele.login.uuid === uuid);
    if (resData) {
      res.json(resData);
      res.status(200);
    } else {
      res.json({ message: "user doesn't exist" });
      res.status(404);
    }
  } else {
    res.json({ message: "invalid link" });
    res.status(400);
  }
};

const getUserBySearch = (req, res) => {
  const { gender, age } = req.query;
  if (gender && age) {
    const resData = jsonData.data.find(
      (ele) => ele.gender === gender && ele.dob.age === Number(age)
    );
    res.json(resData);
    res.status(200);
  } else {
    res.json({ message: "Invalid query" });
    res.status(404);
  }
};

module.exports = {
  getUsersData,
  getUserById,
  getUserBySearch,
};
