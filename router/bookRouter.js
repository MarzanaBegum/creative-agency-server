const express = require("express");
const {
  addBooking,
  findBookByEmail,
  allBooking,
} = require("../controller/bookController");

const router = express.Router();

//addBooking
router.post("/booking", addBooking);

//find book by email
router.post("/", findBookByEmail);

//all booking
router.get("/allBooking", allBooking);

module.exports = router;
