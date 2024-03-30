const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).json({
    msg: "server start"
  });
});

app.listen(port, () => {
  console.log(`Server start on port no ${port}`);
});
