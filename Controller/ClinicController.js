const ClinicModel = require("../Model/ClinicSchema.js");
const express = require("express");
const mongoose = require("mongoose");

// Get all clinics
const getAllClinics = async (req, res) => {
  try {
    const clinics = await ClinicModel.find();
    console.log(clinics);
    res.json(clinics);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Get clinic by ID
const getById = async (req, res) => {
  try {
    const clinicName = req.query.name;
    const clinic = await ClinicModel.find({name: clinicName});
    console.log(clinic);
    res.json(clinic);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
const CreateClinic = async (req, res) =>  {
  const clinic = new ClinicModel({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    time: req.body.time,
    latitude:req.body.latitude,
    longitude:req.body.longitude
  });
  clinic.save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllClinics,
  getById,
  CreateClinic
};
