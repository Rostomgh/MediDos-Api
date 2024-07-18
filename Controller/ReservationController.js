const reservationModel = require("../Model/ReservationShema");

const reserve = async (req, res) => {
  const reservation = new reservationModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    date: req.body.date,
    time: req.body.time,
    number: req.body.number,
    address: req.body.address
  });

  try {
    const data = await reservation.save();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const getreservation = async (req, res) => {
  try {
    const reservations = await reservationModel.find();
    console.log(reservations);
    res.json(reservations);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = {
  reserve,
  getreservation
};
