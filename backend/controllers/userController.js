const User = require("../models/userModel");
const Movie = require("../models/movieModel");
const sendToken = require("../utils/jwtToken");
const Ticket = require("../models/ticktModel");

// register a new user
exports.registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password,
        });
        // res.send(user);
        sendToken(user, 201, res);

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

};

// login a user
exports.loginuser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(401).send({ success: false, message: "Please enter your email and password" });
            return;
        }
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            res.status(401).send({ success: false, message: "Invalid credentials" });
            return;
        }
        const isPasswordMatch = await user.passwordCompare(password);
        if (!isPasswordMatch) {
            res.status(401).send({ success: false, message: "Invalid User" });
            return;
        }
        sendToken(user, 200, res);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

};

// logout a user
exports.userlogout = async (req, res, next) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(200).json({
            success: true,
            message: "logout successfully",
        });

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

};


//get user details
exports.getuserdetails = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

exports.getuserdashboard = async (req, res, next) => {
    try {
        const ticketIds = await Ticket.find({ user: req.params.userId });

        const tickets = await Promise.all(
            ticketIds.map(async (ticket) => {
                const movie = await Movie.findOne({ _id: ticket.movie });
                return {
                    movieName: movie.name,
                    ticketId: ticket._id,
                    seatNumber: ticket.tiketId,
                    movieTime: movie.timeSlot,
                    bookingTime: ticket.bookedAt,
                };
            })
        );

        res.status(200).json({
            success: true,
            tickets,
        });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};
