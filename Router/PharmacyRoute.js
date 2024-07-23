import  express from "express";
import {getAllPharmacys,createPharmacy,getByIdpharmacy}from "../Controller/PharmacyController.js";




const  PharmacyRoute = express.Router();
 
PharmacyRoute.get("/", getAllPharmacys),
PharmacyRoute.get("/search",getByIdpharmacy);
PharmacyRoute.post("/",createPharmacy);
export default PharmacyRoute;