const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    tiketId: {
        type: Number,
        required: [true, "please give ticketId"],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    movie:{
        type: mongoose.Schema.ObjectId,
        ref: "movie",
        required: true,
    },
    bookedAt: {
        type: Date,
        default: Date.now(),
    }
});


module.exports = mongoose.model("ticket", ticketSchema);
