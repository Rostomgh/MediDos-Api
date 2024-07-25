import express from "express";
import {
  reserve,
  getreservation,
} from "../Controller/ReservationController.js";

const reservationRoute = express.Router();
reservationRoute.get("/", getreservation);
reservationRoute.post("/", reserve);

export default reservationRoute;
