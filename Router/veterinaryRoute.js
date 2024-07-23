const express = require("express");
const VeterinaryRoute = express.Router();
const { getAllVeterinaries, getVeterinaryById, createVeterinary } = require("../Controller/VeterinaryController.js");

VeterinaryRoute.get("/", getAllVeterinaries);
VeterinaryRoute.get("/search", getVeterinaryById); 
VeterinaryRoute.post("/", createVeterinary); // Assuming you want to get by ID

module.exports = VeterinaryRoute;
