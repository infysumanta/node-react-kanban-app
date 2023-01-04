const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/boards", require("./board.routes"));
router.use("/boards/:boardId/sections", require("./section.routes"));
router.use("/boards/:boardId/tasks", require("./task.routes"));
module.exports = router;
