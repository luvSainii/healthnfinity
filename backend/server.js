const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const authRoutes = require("./routes/authRoutes");
const logRoutes = require("./routes/logRoutes");
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you want to allow
    credentials: true // Allow cookies to be sent with requests
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);

// Your other routes and middleware...
app.use("/api", logRoutes);


//Connect MongoDB
connectDB();

app.listen(4000,()=>{
    console.log("Server run on Port 4000");
})