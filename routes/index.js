var express = require("express");
var router = express.Router();
const {
  signin,
  signup,
  isAdmin,
  isAuthorized,
  requiresignin,
  logout,
} = require("../controllers/auth");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", signin);

router.get("/dashboard", requiresignin, (req, res, next) => {
  console.log(req.cookies);
  console.log(req.auth);
  res.render("dashboard");
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.post("/signup", signup);

router.get("/logout", logout);

module.exports = router;
