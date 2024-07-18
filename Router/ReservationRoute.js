const express = require("express");
const ReservationRoute = express.Router();
const { reserve, getreservation } = require("../Controller/ReservationController");

ReservationRoute.post("/", reserve);
ReservationRoute.get("/", getreservation);

module.exports = ReservationRoute;
