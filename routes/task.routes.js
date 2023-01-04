const express = require("express");
const { param, body } = require("express-validator");
const { isObjectId, validate } = require("../config/validation");
const {
  create,
  updatePosition,
  deleteTask,
  update,
} = require("../controllers/task.controller");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router({ mergeParams: true });

router.route("/").post(
  param("boardId").custom((value) => {
    if (!isObjectId(value)) {
      return Promise.reject("invalid board id");
    } else return Promise.resolve();
  }),
  body("sectionId").custom((value) => {
    if (!isObjectId(value)) {
      return Promise.reject("invalid section id");
    } else return Promise.resolve();
  }),
  validate,
  verifyToken,
  create
);

router.route("/update-position").put(
  param("boardId").custom((value) => {
    if (!isObjectId(value)) {
      return Promise.reject("invalid board id");
    } else return Promise.resolve();
  }),
  validate,
  verifyToken,
  updatePosition
);

router
  .route("/:taskId")
  .delete(
    param("boardId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("invalid board id");
      } else return Promise.resolve();
    }),
    param("taskId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("invalid task id");
      } else return Promise.resolve();
    }),
    validate,
    verifyToken,
    deleteTask
  )
  .put(
    param("boardId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("invalid board id");
      } else return Promise.resolve();
    }),
    param("taskId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("invalid task id");
      } else return Promise.resolve();
    }),
    validate,
    verifyToken,
    update
  );

module.exports = router;
