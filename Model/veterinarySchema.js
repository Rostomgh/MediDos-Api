const mongoose = require("mongoose");

const veterinarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  time: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const VeterinaryModel = mongoose.model("Veterinary", veterinarySchema);

module.exports = VeterinaryModel;
