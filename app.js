const express = require("express"); // importing express

const app = express(); // initilizing app

// importing routers
const filmRouter = require("./routes/filmRoutes");
const peopleRouter = require("./routes/peopleRoutes");
const planetsRouter = require("./routes/planetsRoutes");
const speciesRouter = require("./routes/speciesRoutes");
const starshipsRouter = require("./routes/starshipsRoutes");
const vehiclesRouter = require("./routes/vehiclesRoutes");
const pairsRouter = require("./routes/pairsRoutes");
// use router
app.use("/api/v1/films", filmRouter);
app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/planets", planetsRouter);
app.use("/api/v1/species", speciesRouter);
app.use("/api/v1/starships", starshipsRouter);
app.use("/api/v1/vehicles", vehiclesRouter);
app.use("/api/v1/pairs", pairsRouter);

// handling unused routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Fail",
    message: `Can't find ${req.originalUrl}`,
  });
});

// exporting default app
module.exports = app;
