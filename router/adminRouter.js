const express = require("express");
const { addAdmin, getAdmin } = require("../controller/adminController");

const router = express.Router();

//add admin
router.post("/", addAdmin);

//Get admin
router.get("/allAdmins", getAdmin);

module.exports = router;
