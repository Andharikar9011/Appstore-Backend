const express = require("express");
const router = express.Router();

const {
  addservice,
  updateservice,
  deleteservice,
  getallservice,
  getcategorywiseservice,
  getreadmoreservice,
  buyingdetailsservice,
} = require("../controllers/services");

const {
  createcategories,
  getcategories,
} = require("../controllers/categories");

router.post("/createcategories", createcategories);
router.get("/allcategories", getcategories, (req, res) => {
  console.log(req.categories);
  res.json({ categories: req.categories });
});

router.post("/addservice", addservice);

router.post("/updateservice", updateservice);

router.post("/deleteservice", deleteservice);

router.post("/getallservice", getallservice);

router.post("/getcategorywiseservice", getcategorywiseservice);

router.post("/getreadmoreservice", getreadmoreservice);

router.post("/buyingdetailsservice", buyingdetailsservice);

module.exports = router;
