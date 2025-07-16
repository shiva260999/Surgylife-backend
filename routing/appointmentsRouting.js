const express = require("express");
const Appointment = require("../modal/appointmentsModel");
const appointmentsRouting = express.Router();

appointmentsRouting.get("/appointment", async (req, res) => {
  try {
    const result = await Appointment.find();

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

appointmentsRouting.post("/appointment", async (req, res) => {
  try {
    const senddata = new Appointment(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = appointmentsRouting;
