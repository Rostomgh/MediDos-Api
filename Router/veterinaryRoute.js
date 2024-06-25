const express = require("express");
const veterinaryRoute = express.Router();
const { getAllVeterinaries, getVeterinaryById } = require("../Controller/VeterinaryController");

veterinaryRoute.get("/", getAllVeterinaries);
veterinaryRoute.get("/:id", getVeterinaryById); // Assuming you want to get by ID

module.exports = veterinaryRoute;
