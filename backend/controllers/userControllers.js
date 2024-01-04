const { userModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { name, email, avatar, password } = req.body;

  try {
    const findUser = await userModel.findOne({ email });
    if (findUser) {
      return res
        .status(401)
        .send({ status: false, msg: "user alredy exist please Login " });
    }
    bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        return res.status(401).send({
          status: false,
          msg: "error While Hashing the password",
          error: err.message,
        });
      } else {
        const user = await userModel({ name, email, password: hash, avatar });
        user.save();
        res.status(201).send({ status: true, mag: "New user Created", user });
      }
    });
  } catch (error) {
    return res.status(401).send({
      status: true,
      mag: "error while registering the User ",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const finduser = await userModel.findOne({ email });
    if (!finduser) {
      return res
        .status(200)
        .send({ status: false, msg: "email Not Found Please Try to register" });
    } else {
      let hash = bcrypt.compare(password, finduser.password);
      if (hash) {
        let token = jwt.sign(
          { name: finduser.name, _id: finduser._id },
          process.env.JWTTOKEN
        );
        return res
          .status(201)
          .send({ status: true, mgs: "Login Successfull..!", token });
      }
    }
  } catch (error) {
    return res.status(401).send({
      status: true,
      mag: "error while registering the User ",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };
