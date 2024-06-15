const ClinicModel = require("../Schema/ClinicSchema");

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

module.exports = {
  getAllClinics,
};
