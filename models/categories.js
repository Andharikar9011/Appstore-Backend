const mongoose = require("mongoose");

const uuid = require("uuid");

// user schema

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 50,
      minlength: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("afacategory", categorySchema);
