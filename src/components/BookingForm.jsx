import React, { useState } from 'react';
import { Calendar, Users, CreditCard, MapPin, Star, Sparkles } from 'lucide-react';

export const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleSubmit = () => {
    
    if (!formData.checkIn || !formData.checkOut || !formData.roomType || !formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const roomTypes = [
    { value: 'standard', label: 'Standard Room', price: '$199/night', features: '2 Guests • City View' },
    { value: 'deluxe', label: 'Deluxe Room', price: '$299/night', features: '3 Guests • Ocean View' },
    { value: 'suite', label: 'Presidential Suite', price: '$599/night', features: '4 Guests • Premium Amenities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 flex items-center justify-center">
      <div className="relative max-w-4xl w-full">

        
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Book Your Stay At MOONLIGHT HOTEL
              </h2>
              <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse delay-500" />
            </div>
            <p className="text-gray-300 text-lg">Experience luxury like never before</p>
          </div>
          
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="group">
              <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Check-in Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-4 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                  required
                />
              </div>
            </div>
            
            <div className="group">
              <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Check-out Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-4 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                  required
                />
              </div>
            </div>
          </div>
          
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="group">
              <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-4 top-4 h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm appearance-none cursor-pointer"
                >
                  <option value={1} className="bg-slate-800">1 Guest</option>
                  <option value={2} className="bg-slate-800">2 Guests</option>
                  <option value={3} className="bg-slate-800">3 Guests</option>
                  <option value={4} className="bg-slate-800">4 Guests</option>
                </select>
              </div>
            </div>
            
            <div className="group">
              <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-slate-800">Select Room Type</option>
                {roomTypes.map((room) => (
                  <option key={room.value} value={room.value} className="bg-slate-800">
                    {room.label} - {room.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
        
          
          {formData.roomType && (
            <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <h3 className="text-white font-semibold">
                  {roomTypes.find(r => r.value === formData.roomType)?.label}
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                {roomTypes.find(r => r.value === formData.roomType)?.features}
              </p>
              <p className="text-blue-400 font-bold mt-1">
                {roomTypes.find(r => r.value === formData.roomType)?.price}
              </p>
            </div>
          )}
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="group">
              <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="group">
              <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="mb-10">
            <label className="block text-white/90 mb-3 text-sm font-semibold uppercase tracking-wider">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 hover:bg-white/10 backdrop-blur-sm resize-none"
              placeholder="Tell us about any special requests or preferences..."
            />
          </div>
          
          
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-5 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 group"
          >
            <CreditCard className="h-6 w-6 group-hover:rotate-12 transition-transform" />
            Book Your Dream Stay
            <Sparkles className="h-5 w-5 group-hover:animate-spin" />
          </button>
          
         
          <div className="flex items-center justify-center gap-8 mt-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;