const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected Successfully');
}

module.exports = connectDB;
