const express = require("express");
const app = express();
require("./DB/Connection");
const router = require("./Routers/Route");
const cors = require("cors");
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).json({
    msg: "server start"
  });
});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server start on port no ${port}`);
});
