const express = require("express");
const router = express.Router();

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
  viewalldoubts,
  answercontactdoubt,
} = require("../controllers/contactadmin");

router.post("/createadmin", createadmin);

router.get("/getalladmins", getalladmins);

router.get("/getallcontacts", getallcontacts);

router.get("/geteveryone", geteveryone);

router.post("/updateadmin", updateadmin);

router.post("/updatecontact", updatecontact);

router.post("/deleteadmin", deleteadmin);

router.get("/viewalldoubts", viewalldoubts);

router.post("/answercontactdoubt", answercontactdoubt);

router.post("/viewallservicesusedbycontact", viewallservicesusedbycontact);

router.post("/verifycontactemail", verifycontactemail);

router.post("/verifycontactmobile", verifycontactmobile);

router.post("/enableservicesforcontact", enableservicesforcontact);

router.get("/disableservicesforcontact", disableservicesforcontact);

module.exports = router;
