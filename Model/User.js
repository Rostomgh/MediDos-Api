const express=require ("express");
const mongoose = require("mongoose");
const Schema=moongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  
});
const User = mongoose.model("User", UserSchema)
module.exports = User
