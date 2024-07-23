import express from "express";
import { getAllClinics, getById,CreateClinic } from "../Controller/ClinicController.js";

const ClinicRoute = express.Router();

// Define routes

ClinicRoute.get("/", getAllClinics);
ClinicRoute.get("/search", getById);
ClinicRoute.post("/",CreateClinic);

export default ClinicRoute;
