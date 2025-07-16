const express = require("express");
const Password = require("../modal/registrationModel");
const forgotpasswordRouting = express.Router();

const User = mongoose.model("User", registerSchema);

forgotpasswordRouting.post("/forgotpassword", async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await User.findOne({ email });
    if (!exists) {
      res.send("no user found");
    } else {
      res.send("valid");
    }
    res.send(exists);
  } catch (err) {
    res.send(err);
  }
});

module.exports = forgotpasswordRouting;
