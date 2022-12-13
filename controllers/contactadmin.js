const Services = require("../models/services");
const Contact = require("../models/userdetails");
const uuid = require("uuid");
const crypto = require("crypto");
const Doubts = require("../models/userdoubts");

// tested
exports.getallcontacts = (req, res) => {
  Contact.find({ acctype: 0 }, (err, result) => {
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot find contacts." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

// tested
exports.createadmin = (req, res) => {
  const salt = uuid.v4();
  const user = new Contact();
  user.name = req.body.name;
  user.username = req.body.username;
  user.hashed = crypto
    .pbkdf2Sync(req.body.password, salt, 100, 32, "sha256")
    .toString("hex");
  user.salt = salt;
  user.acctype = 1;
  user.phoneno = req.body.phoneno;
  user.save((err, result) => {
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot creat Admin." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

// tested for all inputs
exports.updateadmin = (req, res) => {
  Contact.findById({ _id: req.body.id }, (err, result) => {
    console.log(result);
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot find contact." });
    } else {
      if (req.body.rights != undefined) {
        result.rights = req.body.rights;
      }
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
          res.status(400).json({ msg: "Cannot Update Admin." });
        } else {
          console.log(data);
          res.status(200).json({ contacts: data });
        }
      });
    }
  });
};

// tested
exports.deleteadmin = (req, res) => {
  Contact.findByIdAndDelete({ _id: req.body.id }, (err, result) => {
    if (err | !result) {
      res.status(400).json({ msg: "Cannot find contact." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

// tested
exports.getalladmins = (req, res) => {
  Contact.find({ acctype: 1 }, (err, result) => {
    if (err | !result) {
      res.status(400).json({ msg: "Cannot find contacts." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

// tested
exports.geteveryone = (req, res) => {
  Contact.find((err, result) => {
    if (err | !result) {
      res.status(400).json({ msg: "Cannot find contacts." });
    } else {
      res.status(200).json({ contacts: result });
    }
  });
};

// tested
exports.updatecontact = (req, res) => {
  Contact.findById({ _id: req.body.id }, (err, result) => {
    if (err | !result) {
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
        result.mobileverified = false;
      }
      result.save((err, result) => {
        if (err | !result) {
          res.status(400).json({ msg: "Cannot Update Admin." });
        } else {
          res.status(200).json({ contacts: result });
        }
      });
    }
  });
};

exports.disableservicesforcontact = (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.body.id },
    { $set: { allserviceactive: false } },
    (err, result) => {
      if (err | !result) {
        res.status(400).json({ msg: "Cannot find contact." });
      } else {
        res.status(200).json({ verifysucesss: true, result: result });
      }
    }
  );
};

exports.enableservicesforcontact = (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.body.id },
    { $set: { allserviceactive: true } },
    (err, result) => {
      if (err | !result) {
        res.status(400).json({ msg: "Cannot find contact." });
      } else {
        res.status(200).json({ verifysucesss: true, result: result });
      }
    }
  );
};

exports.verifycontactemail = (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.body.id },
    { $set: { emailverified: true } },
    (err, result) => {
      if (err | !result) {
        res.status(400).json({ msg: "Cannot find contact." });
      } else {
        res.status(200).json({ verifysucess: true, result: result });
      }
    }
  );
};

exports.verifycontactmobile = (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.body.id },
    { $set: { mobileverified: true } },
    (err, result) => {
      if (err | !result) {
        res.status(400).json({ msg: "Cannot find contact." });
      } else {
        res.status(200).json({ verifysucess: true, result: result });
      }
    }
  );
};

exports.viewallservicesusedbycontact = (req, res) => {
  Contact.findById(
    { _id: req.body.id },
    "services allserviceactive name _id",
    (err, result) => {
      if (err | !result) {
        res.status(400).json({ msg: "Cannot find contact." });
      } else {
        res.status(200).json({ result: result });
      }
    }
  );
};

// tested
exports.viewalldoubts = (req, res) => {
  Doubts.find((err, result) => {
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot Find Doubt." });
    } else {
      res.status(200).json({ result: result });
    }
  });
};

// tested
exports.answercontactdoubt = (req, res) => {
  Doubts.findOne({ _id: req.body.id }, (err, result) => {
    if (err | !result) {
      console.log(err);
      res.status(400).json({ msg: "Cannot Find Doubt." });
    }
    result.adminid = req.body.adminid;
    result.answer = req.body.answer;
    result.save((err, result) => {
      if (err | !result) {
        console.log(err);
        res.status(400).json({ msg: "Cannot save Doubt." });
      } else {
        res.status(200).json({ msg: "Answer recorded." });
      }
    });
  });
};
