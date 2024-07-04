const VeterinaryModel = require("../Model/veterinarySchema");

const getAllVeterinaries = async (req, res) => {
  try {
    const veterinaries = await VeterinaryModel.find();
    res.json(veterinaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVeterinaryById = async (req, res) => {
  try {
    const id = req.params.id;
    const veterinary = await VeterinaryModel.findById(id);
    if (!veterinary) {
      return res.status(404).json({ error: "Veterinary not found" });
    }
    res.json(veterinary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createVeterinary = async (req, res) => {
  try {
    const veterinary = new VeterinaryModel({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      time: req.body.time,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });
    await veterinary.save(); // Ensure to await save() to handle promises correctly
    res.status(201).json(veterinary); // Respond with the saved veterinary object
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllVeterinaries, getVeterinaryById, createVeterinary };
