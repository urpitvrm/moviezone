const express = require("express");
const cookiep = require("cookie-parser");
const cors = require("cors");
//add environment variable
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());
app.use(cookiep());
app.use(cors());


const ticket = require("./routes/ticketRoute");
const user = require("./routes/userRoute");
const movie = require("./routes/movieRoute");

app.use("/api/v1", ticket);
app.use("/api/v1", user);
app.use("/api/v1", movie);


module.exports = app;
