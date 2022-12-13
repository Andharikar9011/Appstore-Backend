const mongoose = require("mongoose");
const { Schema } = mongoose;

const afaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    hashed: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    phoneno: {
      type: Number,
      required: true,
      unique: true,
    },
    profilephoto: {
      type: Buffer,
      contentType: String,
    },
    company: String,
    jobtitle: String,
    pincode: Number,
    district: String,
    state: String,
    address: String,
    acctype: {
      type: Number,
      default: 0,
    },
    rights: {
      type: Array,
      default: [],
    },
    emailverified: {
      type: Boolean,
      default: false,
    },
    mobileverified: {
      type: Boolean,
      default: false,
    },
    allserviceactive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Contact = mongoose.model("afauser", afaSchema);
module.exports = Contact;
