const express = require("express");
const Password = require("../modal/registrationModel");
const resetpasswordRouting = express.Router();

const User = mongoose.model("User", registerSchema);

resetpasswordRouting.post("/resetpassword/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    await User.findByIdAndUpdate(id, { password });
    res.send({ message: "Password reset successful!" });
  } catch (error) {
    res.send(err);
  }
});

module.exports = resetpasswordRouting;
