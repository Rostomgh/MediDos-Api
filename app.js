import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import your routes and middleware
import clinicRoute from './src/router/clinicRoute.js';
import pharmacyRoute from './src/router/pharmacyRoute.js';
import veterinaryRoute from './src/router/veterinaryRoute.js';
import authRoute from './src/router/authRoute.js';
import reservationRoute from './src/router/reservationRoute.js';

const app = express();
dotenv.config();

// Middleware setup
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
const Mongo_Db_Url = process.env.Mongo_Db_Url;
mongoose.connect(Mongo_Db_Url)
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
app.use('/clinic', clinicRoute);
app.use('/pharmacy', pharmacyRoute);
app.use('/veterinary', veterinaryRoute);
app.use('/user', authRoute);
app.use('/reservations',reservationRoute)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
  
});

// Start server
const port =process.env.PORT ||3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
