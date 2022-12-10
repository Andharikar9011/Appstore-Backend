const Services = require("../models/services");
const formidable = require("formidable");

exports.addservice = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  // console.log(form)
  form.parse(req, (err, fields, files) => {
    // console.log([fields,files])
    if (err) {
      return res.status(400).json({
        error: "Image Could not be uploaded.",
      });
    }
    console.log(fields);
    console.log(files);
    const service = new Services();
    res.send("hi");
  });
};
exports.updateservice = (req, res) => {
  if (req.body.name != undefined) {
    service.name = req.body.name;
  }
  if (req.body.description != undefined) {
    service.description = req.body.description;
  }
  if (req.body.price != undefined) {
    service.price = req.body.price;
  }
  if (req.body.tags != undefined) {
    service.tags = req.body.tags;
  }
  if (req.body.category != undefined) {
    service.category = req.body.category;
  }
  if (req.body.creator != undefined) {
    service.creator = req.body.creator;
  }
  if (req.body.quantity != undefined) {
    service.quantity = req.body.quantity;
  }
  if (req.body.specifications != undefined) {
    service.specifications = req.body.specifications;
  }
  if (req.body.size != undefined) {
    service.size = req.body.size;
  }
};
exports.deleteservice = (req, res) => {};
exports.getallservice = (req, res) => {};
exports.getcategorywiseservice = (req, res) => {};
exports.getreadmoreservice = (req, res) => {};
exports.buyingdetailsservice = (req, res) => {};
