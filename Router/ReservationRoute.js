import express from "express"
import  { reserve, getreservation } from "../Controller/ReservationController.js"



const ReservationRoute = express.Router();
 
ReservationRoute.post("/", reserve);
ReservationRoute.get("/", getreservation);



export default ReservationRoute;
