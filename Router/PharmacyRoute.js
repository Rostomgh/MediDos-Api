import  express from "express";
import {getAllPharmacys,createPharmacy,getByIdpharmacy}from "../Controller/PharmacyController.js";




const  pharmacyRoute = express.Router();
 
pharmacyRoute.get("/", getAllPharmacys),
pharmacyRoute.get("/search",getByIdpharmacy);
pharmacyRoute.post("/",createPharmacy);
export default pharmacyRoute;