import  express from  "express";
import  { getAllVeterinaries, getVeterinaryById, createVeterinary } from  "../Controller/VeterinaryController.js";
const veterinaryRoute = express.Router();

veterinaryRoute.get("/", getAllVeterinaries);
veterinaryRoute.get("/search", getVeterinaryById); 
veterinaryRoute.post("/", createVeterinary); 

export default veterinaryRoute;
