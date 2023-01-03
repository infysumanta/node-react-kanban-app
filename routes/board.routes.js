const express = require("express");
const { param } = require("express-validator");
const { isObjectId, validate } = require("../config/validation");
const {
  create,
  getAll,
  updatePosition,
  getOne,
  update,
} = require("../controllers/board.controller");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router
  .route("/")
  .post(verifyToken, create)
  .get(verifyToken, getAll)
  .put(verifyToken, updatePosition);

router
  .route("/:boardId")
  .get(
    param("boardId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("Invalid Id");
      } else {
        return Promise.resolve();
      }
    }),
    validate,
    verifyToken,
    getOne
  )
  .put(
    param("boardId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("Invalid Id");
      } else {
        return Promise.resolve();
      }
    }),
    validate,
    verifyToken,
    update
  );

module.exports = router;
