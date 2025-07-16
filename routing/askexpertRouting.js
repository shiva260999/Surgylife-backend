const express = require("express");
const AskExpert = require("../modal/askexpertModel");
const askexpertRouting = express.Router();

askexpertRouting.get("/askexpert", async (req, res) => {
  try {
    const result = await AskExpert.find();

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

askexpertRouting.post("/askexpert", async (req, res) => {
  try {
    const senddata = new AskExpert(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = askexpertRouting;
