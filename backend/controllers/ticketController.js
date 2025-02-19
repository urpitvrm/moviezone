const Ticket = require("../models/ticktModel");
const Movie = require("../models/movieModel");

// Controller function to book a ticket
const bookTicket = async (req, res) => {
    const { movieId, ticketId,userId } = req.body;

    // Validate required fields
    if (!movieId || !ticketId) {
        return res.status(400).json({
            success: false,
            message: "Movie ID and Ticket ID (seat number) are required.",
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

    // Check if the ticket with the same ticketId for the same movie already exists
    const existingTicket = await Ticket.findOne({ tiketId: ticketId, movie: movieId });
    if (existingTicket) {
        return res.status(400).json({
            success: false,
            message: "This seat is already booked.",
        });
    }

    // Create a new ticket
    const ticket = await Ticket.create({
        tiketId: ticketId,
        user: userId,
        movie: movieId,
    });

    res.status(201).json({
        success: true,
        message: "Ticket booked successfully!",
        ticket,
    });
};

module.exports = { bookTicket };
