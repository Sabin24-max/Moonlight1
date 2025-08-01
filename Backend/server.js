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

// Middleware for CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Register API routes with appropriate base paths
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);

// Centralized error handling middleware
app.use(errorHandler);

// Start server after successful DB sync
const PORT = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to sync database:', err.message);
  });
