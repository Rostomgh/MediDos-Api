const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const veterinarySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  time: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});
const veterinaryModel = mongoose.model("veterinary", veterinarySchema);
module.exports = veterinaryModel;

