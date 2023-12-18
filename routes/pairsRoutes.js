const express = require("express");
const pairsController = require("../controllers/parisAndNamesController");
const router = express.Router();

router.route("/").get(pairsController);

module.exports = router;
