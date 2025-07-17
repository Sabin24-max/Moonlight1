import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

// BookingForm Component
const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: 'standard',
    guests: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-black text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-medium mb-2">Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-medium mb-2">Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-medium mb-2">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
          >
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div>
          <label className="block text-black text-sm font-medium mb-2">Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
          </select>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

// BookingPage Component
export default function BookingPage() {
  const [bookingStatus, setBookingStatus] = useState('idle');

  const handleBookingSubmit = async (bookingData) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      if (response.ok) {
        setBookingStatus('success');
      } else {
        setBookingStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setBookingStatus('error');
    }
  };

  if (bookingStatus === 'success') {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-black mb-4">Booking Confirmed!</h1>
          <p className="text-gray-700 text-lg mb-8">
            Thank you for choosing Moonlight Hotel. Your reservation has been confirmed and you will receive a confirmation email shortly.
          </p>
          <button
            onClick={() => setBookingStatus('idle')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Another Room
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Book Your Stay</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Reserve your perfect room at Moonlight Hotel and experience luxury like never before.
          </p>
        </div>
        <BookingForm onSubmit={handleBookingSubmit} />
        {bookingStatus === 'error' && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center">
              <p className="text-red-800">
                There was an error processing your booking. Please try again.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
