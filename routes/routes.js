const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/boards", require("./board.routes"));

module.exports = router;
