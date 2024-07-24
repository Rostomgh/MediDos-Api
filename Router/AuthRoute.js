import express from "express"

import { login, signup } from "../Controller/UserController.js";



const  authRoute = express.Router();

// Route definitions
authRoute.post("/signup", signup);
authRoute.post("/login", login);
//export module
export default authRoute;
