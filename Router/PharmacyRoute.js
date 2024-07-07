const express = require("express");
const PharmacyRoute = express.Router();
const{getAllPharmacys,createPharmacy,getByIdpharmacy}=require("../Controller/PharmacyController");

PharmacyRoute.get("/", getAllPharmacys),
PharmacyRoute.get("/search",getByIdpharmacy);
PharmacyRoute.post("/",createPharmacy);
module.exports=PharmacyRoute;