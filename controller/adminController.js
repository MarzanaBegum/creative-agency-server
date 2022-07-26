const Admins = require("../models/AdminSchema");

async function addAdmin(req, res, next) {
  const newAdmin = new Admins(req.body);
  try {
    const result = await newAdmin.save();
    res.status(200).json({
      message: "Admin was added successfully!",
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

// get admin
async function getAdmin(req, res, next) {
  try {
    const result = await Admins.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      errors: {
        msg: err,
      },
    });
  }
}

module.exports = { addAdmin, getAdmin };
