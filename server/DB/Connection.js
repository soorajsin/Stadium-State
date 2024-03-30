const mongoose = require("mongoose");

const url = "";

mongoose
  .connect(url)
  .then(console.log("Database Connected"))
  .catch((error) => {
    console.log(error + "     Database not connected");
  });
