const ClinicModel = require("../Schema/ClinicSchema");
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
    const clinicName = req.body.name;
    const clinic = await ClinicModel.findOne({name: clinicName});
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
