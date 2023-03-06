// const jsonData = require("../users.json");

// const getUsersData = (req, res) => {
//   res.json(jsonData);
//   res.status(200);
// };

// const getUserById = (req, res) => {
//   const { uuid } = req.params;
//   if (uuid) {
//     const resData = jsonData.data.find((ele) => ele.login.uuid === uuid);
//     if (resData) {
//       res.json(resData);
//       res.status(200);
//     } else {
//       res.json({ message: "user doesn't exist" });
//       res.status(404);
//     }
//   } else {
//     res.json({ message: "invalid link" });
//     res.status(400);
//   }
// };

// const getUserBySearch = (req, res) => {
//   const { gender, age } = req.query;
//   if (!gender && !age) {
//     res.status(422).json({ message: "Please enter gender or age or both" });
//   } else if (gender && !age) {
//     if (!Number(gender)) {
//       //validate gender
//       const genderValidationArray = ["male", "female"];
//       if (!genderValidationArray.includes(gender)) {
//         res.json({ message: "Gender can be male or female only" }).status(422);
//       }
//       const resData = jsonData.data.filter((ele) => ele.gender === gender);
//       res.json(resData).status(200);
//     } else {
//       res.json({ message: "Invalid type of gender" }).status(422);
//     }
//   } else if (age && !gender) {
//     if (Number(age) === 0 || Number(age)) {
//       if (Number(age) < 0 || Number(age) > 100) {
//         res.json({ message: "Age out of bounds" }).status(422);
//       }
//       console.log(Number(age));
//       const resData = jsonData.data.filter(
//         (ele) => ele.dob.age === Number(age)
//       );
//       res.send(resData).status(200);
//     } else {
//       res.json({ message: "Age parameter should be a number" });
//     }
//   }
// };

// module.exports = {
//   getUsersData,
//   getUserById,
//   getUserBySearch,
// };

//USING JOI FOR FORM VALIDATION:
//----------------------------------------------------------------------------------------

const jsonData = require("../users.json");

const getUsersData = (req, res) => {
  res.json(jsonData);
  res.status(200);
};

const Joi = require("joi");
const { json } = require("express");
const schema = Joi.object().keys({
  age: Joi.number().integer().min(0).max(100),
  gender: Joi.string().valid("male", "female"),
});

const checkError = (input) => {
  const result = schema.validate(input);
  return result.error;
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

  const error = checkError({ gender, age });
  if (error) {
    return res.status(422).json(error);
  }

  if (gender && age) {
    const resData = jsonData.data.filter(
      (ele) => ele.dob.age === Number(age) && ele.gender === gender
    );
    res.json(resData).status(200);
  } else if (gender) {
    const resData = jsonData.data.filter((ele) => ele.gender === gender);
    res.json(resData).status(200);
  } else if (age) {
    const resData = jsonData.data.filter((ele) => ele.dob.age === Number(age));
    res.json(resData).status(200);
  } else {
    res.json({ message: "Please provide gender or age or both" });
  }

  // if (!gender && !age) {
  //   res.status(422).json({ message: "Please enter gender or age or both" });
  // } else if (gender && !age) {
  //   if (!Number(gender)) {
  //     //validate gender
  //     const genderValidationArray = ["male", "female"];
  //     if (!genderValidationArray.includes(gender)) {
  //       res.json({ message: "Gender can be male or female only" }).status(422);
  //     }
  //     const resData = jsonData.data.filter((ele) => ele.gender === gender);
  //     res.json(resData).status(200);
  //   } else {
  //     res.json({ message: "Invalid type of gender" }).status(422);
  //   }
  // } else if (age && !gender) {
  //   if (Number(age) === 0 || Number(age)) {
  //     if (Number(age) < 0 || Number(age) > 100) {
  //       res.json({ message: "Age out of bounds" }).status(422);
  //     }
  //     console.log(Number(age));
  //     const resData = jsonData.data.filter(
  //       (ele) => ele.dob.age === Number(age)
  //     );
  //     res.send(resData).status(200);
  //   } else {
  //     res.json({ message: "Age parameter should be a number" });
  //   }
  // }
};

module.exports = {
  getUsersData,
  getUserById,
  getUserBySearch,
};
