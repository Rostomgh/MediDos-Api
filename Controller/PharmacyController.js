const pharmacyModel = require("../Model/PharmacySchema");
const express = require("express");
const mongoose = require("mongoose");

const getAllPharmacys = async (req, res) => {
  try {
    const pharmacies = await pharmacyModel.find();
    console.log(pharmacies);
    res.json(pharmacies);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getByIdpharmacy = async (req, res) => {
  try {
    const pharmacyName = req.query.name;
    const pharmacy = await pharmacyModel.find({ name: pharmacyName });
    console.log(pharmacy);
    res.json(pharmacy);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const createPharmacy = async (req, res) => {
  try {
    const pharmacy = new pharmacyModel({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      time: req.body.time,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });
    await pharmacy.save();
    res.json(pharmacy);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { 
  getAllPharmacys, 
  getByIdpharmacy, 
  createPharmacy 
};
