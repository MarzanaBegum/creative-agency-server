const express = require("express");
const { addReview, getReviews } = require("../controller/reviewController");
const avatarUpload = require("../middlewares/services/avatarUpload");

const router = express.Router();

//addReview
router.post("/addReview", avatarUpload, addReview);

//get reviews
router.get("/allReviews", getReviews);

module.exports = router;
