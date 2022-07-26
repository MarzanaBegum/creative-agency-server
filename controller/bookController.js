const Books = require("../models/BookSchema");

async function addBooking(req, res, next) {
  let newBooking;
  newBooking = new Books({
    ...req.body,
  });
  try {
    const result = await newBooking.save();
    res.status(200).json({
      message: "Booking was successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: err,
        },
      },
    });
  }
}

//find book by email
async function findBookByEmail(req, res, next) {
  const filter = req.body.email;
  try {
    const result = await Books.find({ email: filter });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: err,
      },
    });
  }
}

// all booking
async function allBooking(req, res, next) {
  try {
    const result = await Books.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: err,
      },
    });
  }
}
module.exports = { addBooking, findBookByEmail, allBooking };
