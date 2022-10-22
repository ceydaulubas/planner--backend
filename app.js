const express = require('express');
const app = express();
require('dotenv').config();

//DB connection
const dbConnect = require('./config/dbConfig').connectDatabase();

// Middlewares
require('./middlewares/index')(app);

//Initial Route
app.get('/', (_, res) => res.json({ success: true, message: 'Sign up- Log in server is running!' }));

//Route imports
const authRoutes = require('./routes/authRoutes');

// Routes
app.use('/', authRoutes);

module.exports = app;
