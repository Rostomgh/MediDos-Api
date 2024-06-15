const express = require("express");
const { getAllClinics, getById } = require("../Controller/ClinicController");

const ClinicRoute = express.Router();

// Define routes
ClinicRoute.get("/", getAllClinics);
ClinicRoute.get("/:id", getById);

module.exports = ClinicRoute;
