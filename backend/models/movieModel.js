const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please movie name"],
    },
    timeSlot:{
        type: String,
        required: [true, "please movie timslot"],
    }
});


module.exports = mongoose.model("movie", movieSchema);
