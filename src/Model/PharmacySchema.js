import mongoose from "mongoose";
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  time: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const pharmacyModel = mongoose.model("Pharmacy", pharmacySchema);


export default pharmacyModel