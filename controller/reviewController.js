const Reviews = require("../models/ReviewSchema");

async function addReview(req, res, next) {
  let newReview;
  newReview = new Reviews({
    ...req.body,
    avatar: req.files[0].filename,
  });
  try {
    const result = await newReview.save();
    res.status(200).json({
      message: "Review was added successfully!",
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

//get review
async function getReviews(req, res, next) {
  try {
    const result = await Reviews.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: err,
      },
    });
  }
}

module.exports = { addReview, getReviews };
