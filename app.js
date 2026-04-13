const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// 1. load environment variables 
dotenv.config();

// 2. Database connect karne wala function call karein
connectDB();

const app = express();

// 3. Middleware
app.use(express.json());

app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
})