import express from 'express';
import {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
} from '../controllers/roomController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoomById);

// Protect these routes - only admin can manage rooms
router.post('/', protect, admin, createRoom);
router.put('/:id', protect, admin, updateRoom);
router.delete('/:id', protect, admin, deleteRoom);

export default router;
