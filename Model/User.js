const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    minlength: [8, "Password should be at least 8 characters"],
    required: true,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
