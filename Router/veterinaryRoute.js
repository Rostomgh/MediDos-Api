import  express from  "express";
import  { getAllVeterinaries, getVeterinaryById, createVeterinary } from  "../Controller/VeterinaryController.js";
const VeterinaryRoute = express.Router();

VeterinaryRoute.get("/", getAllVeterinaries);
VeterinaryRoute.get("/search", getVeterinaryById); 
VeterinaryRoute.post("/", createVeterinary); 

export default veterinaryRoute;
