const Movie = require("../models/movieModel");
const Ticket = require("../models/ticktModel");
const getMovieTickets = async (req, res) => {
    const { movieId } = req.params;

    // Validate movieId
    if (!movieId) {
        return res.status(400).json({
            success: false,
            message: "Movie ID is required.",
        });
    }

    // Check if the movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) {
        return res.status(404).json({
            success: false,
            message: "Movie not found.",
        });
    }

    // Fetch all tickets for the given movie
    const tickets = await Ticket.find({ movie: movieId });
    const ticketIds = tickets.map(ticket => ticket.tiketId);

    res.status(200).json({
        success: true,
        message: "Tickets fetched successfully!",
        totalTickets: tickets.length,
        ticketIds,
    });
};
const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json({
        success: true,
        data: movies,
    });
}

module.exports = { getMovieTickets, getMovies };