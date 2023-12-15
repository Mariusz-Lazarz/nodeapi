const express = require("express");
const speciesController = require("../controllers/speciesController");
const router = express.Router();

router.route("/").get(speciesController.getAllSpecies);
router.route("/:id").get(speciesController.getOneSpecie);

module.exports = router;
