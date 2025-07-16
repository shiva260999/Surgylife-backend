const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const registerRouting = require("./routing/registerRouting");
const treatmentRouting = require("./routing/treatmentsRouting");
const appointmentsRouting = require("./routing/appointmentsRouting");
const askexpertRouting = require("./routing/askexpertRouting");
require("./dbconfig/dbconfig");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", registerRouting);
app.use("/", treatmentRouting);
app.use("/", appointmentsRouting);
app.use("/", askexpertRouting);

// Import User Model
const User = require("./modal/registrationModel");

// Nodemailer Transport
let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shiva260999@gmail.com",
    pass: "zajy nuex dzyw ipni", // App password here
  },
});

// 🔥 Forgot Password Route
app.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const resetLink = `http://localhost:3000/resetpassword/${user._id}`;

    let mailOptions = {
      from: "shiva260999@gmail.com",
      to: email,
      subject: "Reset Password Link",
      html: `
        <h3>Hello ${user.name},</h3>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}" style="color: #0d6efd;">Reset Password</a>
        <p>This link is valid for one-time use.</p>
      `,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending reset email." });
      }
      console.log("Mail sent successfully:", info.response);
      res.json({ message: "Reset link sent to your email." });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
});

// Start Server
app.listen(4000, () => {
  console.log("port started on 4000 succ");
});
