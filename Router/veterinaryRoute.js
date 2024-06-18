const express = require("express");
const veterinaryRoute = express.Router();
const{getAllVeterinaries}=require("../Controller/veterinaryController");
veterinaryRoute.get("/",getAllVeterinaries);
veterinaryRoute.get("/n",);
veterinaryRoute.post("/",);

module.exports = veterinaryRoute;