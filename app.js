const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Import your routes and middleware
const ClinicRoute = require('./Router/ClinicRoute');
const PharmacyRoute = require('./Router/PharmacyRoute');
const VeterinaryRoute = require('./Router/VeterinaryRoute');
const AuthRoute = require('./Router/AuthRoute');  // Ensure correct import path

const app = express();
dotenv.config();

// Middleware setup
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose.connect(Mongo_Db_Url="mongodb+srv://mohamed:aristoo@cluster0.xezcrdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Test route
app.get('/', (req, res) => {
  res.json('Hello');
});

// Route setup
app.use('/clinic', ClinicRoute);
app.use('/pharmacy', PharmacyRoute);
app.use('/veterinary', VeterinaryRoute);
app.use('/user', AuthRoute);  // Ensure correct route path

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const port =  3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
