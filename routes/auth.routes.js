const express = require("express");
const { body } = require("express-validator");
const { validate } = require("../config/validation");
const { login, register } = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/verifyToken");
const User = require("../models/user.schema");

const router = express.Router();

router.route("/signup").post(
  body("username")
    .isLength({ min: 8 })
    .withMessage("username must be at least 8 characters"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),
  body("confirmPassword")
    .isLength({ min: 8 })
    .withMessage("confirmPassword must be at least 8 characters"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("username already used");
      }
    });
  }),
  validate,
  register
);

router
  .route("/login")
  .post(
    body("username")
      .isLength({ min: 8 })
      .withMessage("username must be at least 8 characters"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must be at least 8 characters"),
    validate,
    login
  );

router.route("/verify-token").post(verifyToken, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
