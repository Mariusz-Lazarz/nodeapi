const express = require("express");
const peopleController = require("../controllers/peopleController");
const router = express.Router();

router.route("/").get(peopleController.getAllPeople);
router.route("/:id").get(peopleController.getOnePerson);

module.exports = router;
