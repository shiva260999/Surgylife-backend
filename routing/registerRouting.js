const express = require("express");
const Register = require("../modal/registrationModel");
const registerRouting = express.Router();

registerRouting.post("/register", async (req, res) => {
  try {
    const senddata = new Register(req.body);
    let result = await senddata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

registerRouting.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await Register.findOne({ email: email });
    if (!exists) {
      res.send("no user found");
    } else if (exists.password !== password) {
      res.send("INvalid");
    } else {
      res.send("valid");
    }
    res.send(exists);
  } catch (err) {
    res.send(err);
  }
});

module.exports = registerRouting;
