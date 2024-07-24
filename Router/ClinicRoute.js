import express from "express";
import { getAllClinics, getById,CreateClinic } from "../Controller/ClinicController.js";

const clinicRoute = express.Router();

// Define routes

clinicRoute.get("/", getAllClinics);
clinicRoute.get("/search", getById);
clinicRoute.post("/",CreateClinic);

export default clinicRoute;
