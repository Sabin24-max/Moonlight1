import db from '../models/index.js';

export const createBooking = async (req, res) => {
  try {
    const booking = await db.Booking.create({ ...req.body, UserId: req.user.id });
    return res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ message: 'Failed to create booking' });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await db.Booking.findAll({
      where: { UserId: req.user.id },
      include: db.Room,
    });
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await db.Booking.findOne({
      where: { id: req.params.id, UserId: req.user.id },
      include: db.Room,
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    return res.status(500).json({ message: 'Failed to fetch booking' });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await db.Booking.findOne({
      where: { id: req.params.id, UserId: req.user.id },
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Assuming you have a 'status' or similar column to mark cancellation
    booking.status = 'cancelled';
    await booking.save();

    return res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return res.status(500).json({ message: 'Failed to cancel booking' });
  }
};
