const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const ClinicRoute = require("./Router/ClinicRoute");
const PharmacyRoute = require("./Router/PharmacyRoute");
const veterinaryRoute = require("./Router/VeterinaryRoute");
const AuthRoute = require("./Router/AuthRoute");

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5001",
    credentials: true,
  })
);

const port = 3000;

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err, "Database not connected");
  });

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/clinic", ClinicRoute);
app.use("/pharmacy", PharmacyRoute);
app.use("/veterinary", veterinaryRoute);
app.use("/login", AuthRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});