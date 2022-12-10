const express = require("express");
const router = express.Router();
const {
  createcategories,
  getcategories,
} = require("../controllers/categories");

const {
  getallcontacts,
  createadmin,
  updateadmin,
  deleteadmin,
  getalladmins,
  geteveryone,
  updatecontact,
  disableservicesforcontact,
  enableservicesforcontact,
  verifycontactemail,
  verifycontactmobile,
  viewallservicesusedbycontact,
} = require("../controllers/contactadmin");

const {
  addservice,
  updateservice,
  deleteservice,
  getallservice,
  getcategorywiseservice,
  getreadmoreservice,
  buyingdetailsservice,
} = require("../controllers/services");

router.post("/createcategories", createcategories);
router.get("/allcategories", getcategories, (req, res) => {
  console.log(req.categories);
  res.json({ categories: req.categories });
});

// router.post("/createadmin", createadmin);

router.get("/getalladmins", getalladmins);

// router.post("/updateadmin", updateadmin);

// router.post("/deleteadmin", deleteadmin);

router.post("/addservice", addservice);

router.post("/updateservice", updateservice);

router.post("/deleteservice", deleteservice);

router.post("/getallservice", getallservice);

router.post("/getcategorywiseservice", getcategorywiseservice);

router.post("/getreadmoreservice", getreadmoreservice);

router.post("/buyingdetailsservice", buyingdetailsservice);

module.exports = router;
