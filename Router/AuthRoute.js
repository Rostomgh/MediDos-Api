const express = require('express');
const AuthRoute = express.Router();
const { login, signup } = require('../Controller/UserController'); // Ensure correct import path

// Route definitions
AuthRoute.post('/signup', signup); // Ensure signup function is properly imported and defined in UserController
AuthRoute.post('/login', login); // Ensure login function is properly imported and defined in UserController

module.exports = AuthRoute;
