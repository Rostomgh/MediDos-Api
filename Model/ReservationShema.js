const express=require("express");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const reservationSchema=new Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:String,required:true},
  date:{type:String,required:true},
  time:{type:String,required:true},
  number:{type:Number,required:true},
  address:{type:String,required:true},
  })

const reservationModel=mongoose.model("Reservation",reservationSchema);
module.exports=reservationModel