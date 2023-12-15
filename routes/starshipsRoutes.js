const express = require("express");
const starshipsController = require("../controllers/starshipsController");
const router = express.Router();

router.route("/").get(starshipsController.getAllStarships);
router.route("/:id").get(starshipsController.getOneStarship);

module.exports = router;
