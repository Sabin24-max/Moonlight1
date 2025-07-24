
import React, { useState } from 'react';
import {
  Calendar,
  Users,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
} from 'lucide-react';
import { Footer } from './Footer';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center text-white">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="h-8 w-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-gray-300 mb-4">
            Thank you for choosing our hotel. We'll send you a confirmation email shortly.
          </p>
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-4 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Hotel Booking</h1>
          <p className="text-gray-400">Reserve your perfect stay with us</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-2xl shadow-2xl p-8 mb-8 space-y-10"
        >
         
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-400" />
              Booking Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Check-in */}
              <div>
                <label className="block text-gray-300 mb-2">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Check-out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-300 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5].map((g) => (
                      <option key={g} value={g}>
                        {g} {g === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Room Type</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Room Type</option>
                    <option value="standard">Standard Room - $99/night</option>
                    <option value="deluxe">Deluxe Room - $149/night</option>
                    <option value="suite">Presidential Suite - $299/night</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="h-6 w-6 text-blue-400" />
              Guest Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

           
            <div className="mt-6">
              <label className="block text-gray-300 mb-2">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </section>

         
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              Special Requests
            </h2>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="Any requests or notes..."
                className="w-full pl-10 py-3 pr-4 border border-gray-700 bg-black text-white rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:-translate-y-1 shadow-lg"
          >
            <CreditCard className="h-5 w-5" />
            Complete Booking
          </button>
        </form>

        <Footer />
      </div>
    </div>
  );
};
