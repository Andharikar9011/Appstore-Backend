const Contact = require("../models/userdetails");
const crypto = require("crypto");
const uuid = require("uuid");
const { expressjwt: expressJwt } = require("express-jwt");
const jwt = require("jsonwebtoken");
// require("dotenv").config();
const JWT_SECRET = "querty";
// console.log(process.env);

exports.signup = (req, res) => {
  const salt = uuid.v4();
  const user = new Contact();
  user.name = req.body.name;
  user.username = req.body.username;
  user.hashed = crypto
    .pbkdf2Sync(req.body.password, salt, 100, 32, "sha256")
    .toString("hex");
  user.salt = salt;
  user
    .save()
    .then((data) => {
      res.render("index", { message: "Signup Successful" });
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
      console.log(error.code);
      if (error.code == 11000) {
        res.render("signup", { message: "User already Present" });
      } else {
        res.render("signup", { message: error.message });
      }
    });
};
exports.signin = (req, res) => {
  Contact.findOne({ username: req.body.username })
    .then((user) => {
      const hashed_pass = crypto
        .pbkdf2Sync(req.body.password, user.salt, 100, 32, "sha256")
        .toString("hex");
      if (hashed_pass == user.hashed) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
          expiresIn: "1h",
        });
        res.cookie("token", token);
        res.redirect("/dashboard");
      }
    })
    .catch((error) => {
      res.render("index", { message: error });
    });
};

exports.requiresignin = expressJwt({
  secret: JWT_SECRET,
  userProperty: "auth",
  algorithms: ["HS256"],
  getToken: (req) => {
    if (req.cookies.token) {
      return req.cookies.token;
    } else {
      return null;
    }
  },
});

exports.isAdmin = (req, res, next) => {
  Contact.findOne({ username: req.profile.username })
    .then((user) => {
      if (user.acctype == 1) {
        next();
      } else {
        res.redirect("/dashboard");
      }
    })
    .catch((error) => {
      res.render("index", { message: "Cannot Access Admin resource." });
    });
};

exports.isSuperAdmin = (req, res) => {
  Contact.findOne({ username: req.profile.username })
    .then((user) => {
      if (user.acctype == 2) {
        next();
      } else {
        res.redirect("/dashboard");
      }
    })
    .catch((error) => {
      res.render("index", { message: "Cannot Access Admin resource." });
    });
};

exports.isAuthorized = (req, res, next) => {
  if (req.profile.id == req.auth.id) {
    next();
  } else {
    req.render("index", { messsage: "Profile error Sign In again Please." });
  }
};

exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.render("index");
};
