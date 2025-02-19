const express = require("express");

const { getMovieTickets, getMovies } = require("../controllers/movieController");


const router = express.Router();
router.route("/movie/:movieId").get(getMovieTickets);

router.route("/movies").get(getMovies);

module.exports = router;