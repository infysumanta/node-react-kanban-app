const mongoose = require("mongoose");
const { schemaOptions } = require("./model.options");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  schemaOptions
);

const User = mongoose.model("User", userSchema);

module.exports = User;
