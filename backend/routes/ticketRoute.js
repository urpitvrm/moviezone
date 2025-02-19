const express = require("express");

const { isAuthUser } = require("../middlewares/auth");
const { bookTicket } = require("../controllers/ticketController");


const router = express.Router();
router.route("/book").post(bookTicket);

module.exports = router;