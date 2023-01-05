const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cookieParser());

app.use("/api/v1", require("./routes/routes"));

app.use("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
