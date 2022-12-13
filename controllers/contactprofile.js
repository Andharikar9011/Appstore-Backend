const Services = require("../models/services");
const mongoose = require("mongoose");
const Doubts = require("../models/userdoubts");
const Contact = require("../models/userdetails");
const uuid = require("uuid");
const crypto = require("crypto");

// tested
exports.createcontact = (req, res) => {
  const salt = uuid.v4();
  const user = new Contact();
  user.name = req.body.name;
  user.username = req.body.username;
  user.hashed = crypto
    .pbkdf2Sync(req.body.password, salt, 100, 32, "sha256")
    .toString("hex");
  user.salt = salt;
  user.acctype = 0;
  user.phoneno = req.body.phoneno;
  user.save((err, result) => {
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot creat User." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

// tested
exports.editmydetails = (req, res) => {
  Contact.findById({ _id: req.body.id }, (err, result) => {
    console.log(result);
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot find contact." });
    } else {
      if (req.body.district != undefined) {
        result.district = req.body.district;
      }
      if (req.body.address != undefined) {
        result.address = req.body.address;
      }
      if (req.body.state != undefined) {
        result.state = req.body.state;
      }
      if (req.body.phoneno != undefined) {
        result.phoneno = req.body.phoneno;
      }
      console.log(result);
      Contact.findByIdAndUpdate({ _id: result.id }, result, (err, data) => {
        if (err | !data) {
          console.log(err);
          res.status(400).json({ msg: "Cannot Update User." });
        } else {
          console.log(data);
          res.status(200).json({ contacts: data });
        }
      });
    }
  });
};

//tested
exports.getmyprofile = (req, res) => {
  Contact.findOne({ _id: req.params.id }, (err, result) => {
    if (err | !result) {
      res.status(400).json({ msg: "Cannot find contacts." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

exports.verifymymobilenumber = (req, res) => {};
exports.verifymyemail = (req, res) => {};
exports.viewmyservices = (req, res) => {};
exports.buyservicerequest = (req, res) => {};
exports.stopservicerequest = (req, res) => {};
exports.registermydoubt = (req, res) => {
  const doubt = new Doubts();
  doubt.userid = req.body.userid;
  doubt.doubt = req.body.doubt;
  doubt.save((err, result) => {
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot save Doubt." });
    } else {
      res.status(200).json({ msg: "Doubt registered." });
    }
  });
};
exports.viewdoubts = (req, res) => {
  Doubts.find({ userid: req.params.id }, (err, result) => {
    if (err | !result) {
      res.status(400).json({ msg: "Cannot find doubts." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

exports.addprofilephoto = (req, res) => {};
exports.deleteprofilephoto = (req, res) => {};
