const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("appointments", appointmentSchema);
