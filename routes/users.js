const express = require("express");
const router = express.Router();

const {
  getmyprofile,
  createcontact,
  editmydetails,
  verifymyemail,
  verifymymobilenumber,
  viewdoubts,
  viewmyservices,
  buyservicerequest,
  stopservicerequest,
  registermydoubt,
} = require("../controllers/contactprofile");

var fs = require("fs");
var path = require("path");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

router.post("/createcontact", createcontact);
router.post("/editmydetails", editmydetails);
router.get("/getmyprofile/:id", getmyprofile);
router.post("/registermydoubt", registermydoubt);
router.get("/viewdoubts/:id", viewdoubts);
// router.post("/upload", upload, (req, res) => {
//   console.log("hio");
//   res.send("img uploaded");
// });

module.exports = router;
