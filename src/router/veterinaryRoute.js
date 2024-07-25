import  express from  "express";
import  { getAllVeterinaries, getVeterinaryById, createVeterinary } from  "../Controller/veterinaryController.js";
const veterinaryRoute = express.Router();

veterinaryRoute.get("/", getAllVeterinaries);
veterinaryRoute.get("/search", getVeterinaryById); 
veterinaryRoute.post("/", createVeterinary); 

export default veterinaryRoute;
