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
