// import libs
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// user schema

const afaservicesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 50,
      minlength: 3,
    },
    description: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 5000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 10,
    },
    tags: {
      type: Array,
      default: [],
    },
    category: {
      type: Array,
      required: true,
    },
    creator: {
      type: ObjectId,
      ref: "afauser",
      date: Date.now(),
      required: true,
    },
    quantity: {
      type: Number,
    },
    specifications: {
      type: Array,
    },
    size: {
      type: String,
      trim: true,
    },
    icon: {
      url: String,
      data: Buffer,
      contentType: String,
    },
    photo: {
      url: String,
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
      required: false,
    },
    reviews: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Services = mongoose.model("afaservices", afaservicesSchema);
module.exports = Services;
