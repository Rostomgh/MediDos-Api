const express = require("express");
const veterinaryRoute = express.Router();
const{getAllVeterinaries}=require("../Controller/veterinaryController");
const getAllVeterinaries = async (req, res) => {
  try {
    const viterinary = await veterinaryModel.find();
    console.log(viterinary);
    res.json(viterinary);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
module.exports = {getAllVeterinaries,}