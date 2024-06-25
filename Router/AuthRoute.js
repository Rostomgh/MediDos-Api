const express = require("express");
const AuthRoute = express.Router();
const { login, signup } = require("../Controller/UserController");

// Route definitions
AuthRoute.post("/signup", signup);
AuthRoute.post("/login", login);
//export module
module.exports = AuthRoute;
