const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ClinicRoute = require("./Router/ClinicRoute");

const app = express();
dotenv.config();

// Set the port
const port =  3000;

app.use(express.json());

// MongoDB connection string from environment variable
const mongoURI =  "your_mongo_connection_string_here";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err, "Database not connected");
  });

app.use("/clinic", ClinicRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
