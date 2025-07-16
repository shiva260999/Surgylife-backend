const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shiva260999:OszYLTBaAIZ4QLp4@fullstack-surgylife.xxde8ad.mongodb.net/?retryWrites=true&w=majority&appName=Fullstack-surgylife"
  )
  .then((con) => {
    console.log("connected");
  })
  .catch((err) => {
    //console.log("No connection");
  });
