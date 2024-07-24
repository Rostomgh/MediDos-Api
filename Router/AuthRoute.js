import express from "express"

import { login, signup } from "../Controller/UserController.js";



const  AuthRoute = express.Router();

// Route definitions
AuthRoute.post("/signup", signup);
AuthRoute.post("/login", login);
//export module
export default authRoute;
