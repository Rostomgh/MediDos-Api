const Clinic = require("../Schema/ClinicSchema");

// Get all clinics
const getAllClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();
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
    const clinic = await Clinic.findById(req.params.id);
    console.log(clinic);
    res.json(clinic);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getAllClinics,
  getById,
};
