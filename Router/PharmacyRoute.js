const express = require("express");
const PharmacyRoute = express.Router();
const{getAllPharmacys,CreatePharmacy,getByIdpharmacy}=require("../Controller/PharmacyController");

PharmacyRoute.get("/", getAllPharmacys),
PharmacyRoute.get("/n",getByIdpharmacy);
PharmacyRoute.post("/",CreatePharmacy);
