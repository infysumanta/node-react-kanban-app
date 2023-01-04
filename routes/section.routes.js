const express = require("express");
const { param } = require("express-validator");
const { isObjectId, validate } = require("../config/validation");
const {
  create,
  update,
  deleteSection,
} = require("../controllers/section.controller");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router({ mergeParams: true });

router.route("/").post(
  param("boardId").custom((value) => {
    if (!isObjectId(value)) {
      return Promise.reject("Invalid Id");
    } else {
      return Promise.resolve();
    }
  }),
  validate,
  verifyToken,
  create
);

router
  .route("/:sectionId")
  .put(
    param("boardId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("Invalid board Id");
      } else {
        return Promise.resolve();
      }
    }),
    param("sectionId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("Invalid section Id");
      } else {
        return Promise.resolve();
      }
    }),
    validate,
    verifyToken,
    update
  )
  .delete(
    param("boardId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("Invalid board Id");
      } else {
        return Promise.resolve();
      }
    }),
    param("sectionId").custom((value) => {
      if (!isObjectId(value)) {
        return Promise.reject("Invalid section Id");
      } else {
        return Promise.resolve();
      }
    }),
    validate,
    verifyToken,
    deleteSection
  );

module.exports = router;
