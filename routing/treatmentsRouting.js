const express = require("express");
const Treatment = require("../modal/treatmentsModel");
const treatmentRouting = express.Router();

treatmentRouting.get("/treatment", async (req, res) => {
  try {
    const result = await Treatment.find();

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

treatmentRouting.post("/treatment", async (req, res) => {
  try {
    const senddata = new Treatment(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = treatmentRouting;
