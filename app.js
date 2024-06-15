const express = require("express");
Port=3000;
const app=express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app.use(express.json());
dotenv.config();
mongoose.connect('mongodb+srv://mohamed:rosmouh@cluster0.fdzeqkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
  console.log("database connected");  
})
.catch((err)=>{
  console.log(err);
})
const ClinicRoute=require('./Router/ClinicRoute')
app.use('/clinic',ClinicRoute)









app.listen(Port,()=>{
  console.log(`http://localhost:${port}`)
})





