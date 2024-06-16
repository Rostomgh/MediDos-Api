const express = require("express");
const { getAllClinics, getById,CreateClinic } = require("../Controller/ClinicController");

const ClinicRoute = express.Router();

// Define routes
ClinicRoute.get("/", getAllClinics);
ClinicRoute.get("/n", getById);
ClinicRoute.post("/",CreateClinic)

module.exports = ClinicRoute;
