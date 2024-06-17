const express = require("express");
const PharmacyRoute = express.Router();
const{getAllPharmacys}=require("../Controller/PharmacyController");

PharmacyRoute.get("/", getAllPharmacys),
PharmacyRoute.get("/n");
PharmacyRoute.post("/");
