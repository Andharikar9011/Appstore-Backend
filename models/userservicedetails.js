const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const afauserservicedetailsschema = mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "afauser",
      required: true,
    },
    serviceid: {
      type: ObjectId,
      ref: "afaservices",
      required: true,
    },
    startdate: {
      type: Date,
    },
    isactive: {
      type: Boolean,
      required: true,
    },
    usage: {
      type: Array,
    },
    paymentdetails: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Userservicedetails = mongoose.model(
  "afauserservicedetails",
  afauserservicedetailsschema
);
module.exports = Userservicedetails;
