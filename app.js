const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ClinicRoute = require("./Router/ClinicRoute");
const PharmacyRoute=require("./Router/PharmacyRoute");

const app = express();
dotenv.config();

// Set the port
const port = 3000;

app.use(express.json());

mongoose
  .connect(
  "mongodb+srv://mohamed:aristoo@cluster0.xezcrdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err, "Database not connected");
  });

app.use("/clinic", ClinicRoute);
app.use("/pharmacy",PharmacyRoute)
app.use("/veterinary",veterinaryRoute)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
