const express = require("express");
const AuthRoute = express.Router();
const { login, signup } = require("../Controller/UserController");
const authMiddleware = require("../Middleware/authmiddleware");

// Route definitions
AuthRoute.post("/signup", signup); // Ensure signup function is properly imported and defined in UserController
AuthRoute.post("/login", authMiddleware, login); // Ensure login function is properly imported and defined in UserController

module.exports = AuthRoute;
