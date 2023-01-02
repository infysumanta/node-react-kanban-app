const express = require("express");
const { body } = require("express-validator");
const { validate } = require("../config/validation");
const {
  create,
  getAll,
  updatePosition,
} = require("../controllers/board.controller");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router
  .route("/")
  .post(verifyToken, create)
  .get(verifyToken, getAll)
  .put(verifyToken, updatePosition);

module.exports = router;
