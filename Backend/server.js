import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Import database and route modules
import db from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// Middleware for JSON parsing and CORS
app.use(express.json());

// ✅ Enable CORS for frontend (React Vite)
app.use(cors({
  origin: 'http://localhost:5173', // Update this if frontend is hosted elsewhere
  credentials: true,
}));

// API Route registration
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);

// Optional: Handle undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Centralized error handler
app.use(errorHandler);

// Start server after DB connection
const PORT = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    console.log('✅ Database synced successfully');
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to sync database:', err.message);
  });
