const express = require("express"); // importing express

const app = express(); // initilizing app

// importing routers
const filmRouter = require("./routes/filmRoutes");

// use router
app.use("/api/v1/films", filmRouter);

// handling unused routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Fail",
    message: `Can't find ${req.originalUrl}`,
  });
});

// exporting default app
module.exports = app;
