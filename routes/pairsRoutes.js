const express = require("express");
const pairsController = require("../controllers/parisController");
const router = express.Router();

router.route("/").get(pairsController.getAllPairs);

module.exports = router;
