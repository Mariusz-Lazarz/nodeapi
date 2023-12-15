const express = require("express");
const vehiclesController = require("../controllers/vehiclesController");
const router = express.Router();

router.route("/").get(vehiclesController.getAllVehicles);
router.route("/:id").get(vehiclesController.getOneVehicle);

module.exports = router;
