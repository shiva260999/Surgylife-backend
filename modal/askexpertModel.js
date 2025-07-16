const mongoose = require("mongoose");

const askExpertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  question: { type: String, required: true },
  // store file path if uploaded
});

module.exports = mongoose.model("askexpert", askExpertSchema);
