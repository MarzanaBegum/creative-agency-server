const express = require("express");
const {
  addService,
  getServices,
  deleteService,
} = require("../controller/serviceController");
const avatarUpload = require("../middlewares/services/avatarUpload");

const router = express.Router();

//addService
router.post("/addService", avatarUpload, addService);

//get services
router.get("/allServices", getServices);

//delete service by id
router.delete("/delete/:serviceId", deleteService);

module.exports = router;
