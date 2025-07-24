
import React, { useState } from 'react';
import { BookingForm } from '../components/BookingForm';
import { CheckCircle } from 'lucide-react';

export const BookingPage = () => {
  const [bookingStatus, setBookingStatus] = useState('idle');

  const handleBookingSubmit = async (bookingData) => {
    try {
      // Simulate API call
      console.log('Booking data:', bookingData);
      
      // Simulate processing time
      setTimeout(() => {
        setBookingStatus('success');
      }, 1000);
      
    } catch (error) {
      console.error('Booking error:', error);
      setBookingStatus('error');
    }
  };

  if (bookingStatus === 'success') {
    return (
      <div className="min-h-screen bg-dark-900 py-20 text-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h1>
          <p className="text-gray-400 text-lg mb-8">
            Thank you for choosing Moonlight Hotel. Your reservation has been confirmed and you will receive a confirmation email shortly.
          </p>
          <button 
            onClick={() => setBookingStatus('idle')}
            className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Book Another Room
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Stay</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reserve your perfect room at Moonlight Hotel and experience luxury like never before.
          </p>
        </div>

        <BookingForm onSubmit={handleBookingSubmit} />

        {bookingStatus === 'error' && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 text-center">
              <p className="text-red-200">
                There was an error processing your booking. Please try again.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};