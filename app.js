const express = require("express"); // importing express

const app = express(); // initilizing app

app.get("/", (req, res) => {
  res.status(200).json("Hello");
});

// exporting default app
module.exports = app;
