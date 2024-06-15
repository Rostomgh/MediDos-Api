const express = require("express");
const mongoose = require("mongoose");
const ClinicShema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  time: { type: String, required: true },
});
module.exports = mongoose.model("Clinic", ClinicShema);
