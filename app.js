const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// Set the port
const port = 3000 ;

app.use(express.json());

// Use environment variable for MongoDB connection string
const mongoURI =  "mongodb+srv://mohamed:aristoo@cluster0.xezcrdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err, "Database not connected");
  });

const ClinicRoute = require("./Router/ClinicRoute");
app.use("/clinic", ClinicRoute);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
