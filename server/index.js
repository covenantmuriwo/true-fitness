const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://true-fitness-snowy.vercel.app',
    'https://true-fitness-gym.netlify.app',
    'https://true-fitness.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());   // This must come AFTER cors
// Routes - This must come AFTER middleware
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const wishlistRoutes = require('./routes/wishlist');
app.use('/api/wishlist', wishlistRoutes);
// Basic test route
app.get('/', (req, res) => {
  res.send('True Fitness Backend is running...');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    if (err.message.includes('whitelist') || err.message.includes('IP')) {
      console.error('→ Go to MongoDB Atlas > Network Access > Add 0.0.0.0/0');
    }
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});