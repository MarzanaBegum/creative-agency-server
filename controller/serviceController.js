const Services = require("../models/ServiceSchema");

async function addService(req, res, next) {
  let newService;
  newService = new Services({
    ...req.body,
    avatar: req.files[0].filename,
  });
  try {
    const result = await newService.save();
    res.status(200).json({
      message: "Service was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

//get services
async function getServices(req, res, next) {
  try {
    const result = await Services.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: err,
      },
    });
  }
}

//delete services
async function deleteService(req, res, next) {
  try {
    const result = await Services.deleteOne({ _id: req.params.serviceId });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: err,
      },
    });
  }
}
module.exports = { addService, getServices, deleteService };
