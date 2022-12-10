const Categories = require("../models/categories");

exports.createcategories = (req, res) => {
  const category = new Categories({ name: req.body.category });
  category.save((err, result) => {
    if (err | !result) {
      res.status(400).json({ msg: "Error while creation." });
    } else {
      message = result.name + " - category created.";
      res.status(200).json({ msg: message });
    }
  });
};

exports.getcategories = async (req, res, next) => {
  const result = await Categories.find();
  req.categories = result;
  next();
};
