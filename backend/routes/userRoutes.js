const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");
const UserRoute = express.Router();

UserRoute.route("/register").post(registerUser);
UserRoute.route("/login").post(loginUser);

module.exports = { UserRoute };
