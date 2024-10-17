// app.js
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const { MONGO_URI, PORT } = require('./config');

const app = express();

// MongoDB connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads')); // Serve static files from uploads

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
