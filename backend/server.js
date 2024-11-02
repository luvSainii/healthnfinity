const express = require('express');
const connectDB = require('./config/db')
require('dotenv').config();


const app = express();

//Connect MongoDB
connectDB();

app.listen(4000,()=>{
    console.log("Server run on Port 4000");
})