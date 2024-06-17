const pharmacyModel=require("../Schema/PharmacySchema");
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
module.exports = { getAllPharmacys }