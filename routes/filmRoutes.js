const express = require("express");
const filmController = require("../controllers/filmController");
const router = express.Router();

router.route("/").get(filmController.getAllFilms);
router.route("/:id").get(filmController.getOneFilm);

module.exports = router;
