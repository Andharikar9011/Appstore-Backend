const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const afauserdoubtsschema = mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "afauser",
    },
    adminid: {
      type: ObjectId,
      ref: "afauser",
    },
    doubt: {
      type: String,
    },
    answer: {
      type: String,
    },
  },
  { timestamps: true }
);

const Userdoubts = mongoose.model("afauserdoubts", afauserdoubtsschema);
module.exports = Userdoubts;
