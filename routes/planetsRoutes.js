const express = require("express");
const planetsController = require("../controllers/planetsController");
const router = express.Router();

router.route("/").get(planetsController.getAllPlanets);
router.route("/:id").get(planetsController.getOnePlanet);

module.exports = router;
