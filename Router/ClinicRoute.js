const express = require("express");
const ClinicRoute = express.Router();
const ClinicShema = require("../Shema/ClinicShema");
const { getAllClinics } = require("../Controller/ClinicController");


ClinicRoute.get("/", getAllClinics);

ClinicRoute.get("/:id", (req, res) => {
  ClinicModel.findById(req.params.name)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

ClinicRoute.post("/", (req, res) => {
  const Clinic = new ClinicShema({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    time: req.body.time,
  });
  Clinic.save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports=ClinicRoute
