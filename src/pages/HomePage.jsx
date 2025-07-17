import React from 'react';
import { Hero } from '../components/Hero';
import { RoomCard } from '../components/RoomCard';
import { Wifi, Car, Coffee, Utensils, Dumbbell, Waves } from 'lucide-react';

export const HomePage = () => {
  const featuredRooms = [
    {
      id: '1',
      name: 'Deluxe Ocean View',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299,
      capacity: 2,
      amenities: ['WiFi', 'Parking', 'Breakfast'],
      rating: 4.8,
      description: 'Luxurious room with stunning ocean views and modern amenities.'
    },
    {
      id: '2',
      name: 'Presidential Suite',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 599,
      capacity: 4,
      amenities: ['WiFi', 'Parking', 'Breakfast'],
      rating: 4.9,
      description: 'Ultimate luxury suite with separate living area and premium services.'
    },
    {
      id: '3',
      name: 'Standard Room',
      image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 149,
      capacity: 2,
      amenities: ['WiFi', 'Parking'],
      rating: 4.5,
      description: 'Comfortable and elegant room with all essential amenities.'
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout the hotel' },
    { icon: Car, name: 'Free Parking', description: 'Complimentary valet parking service' },
    { icon: Utensils, name: 'Restaurant', description: 'Fine dining with international cuisine' },
    { icon: Dumbbell, name: 'Fitness Center', description: '24/7 modern gym facilities' },
    { icon: Waves, name: 'Spa & Pool', description: 'Relaxing spa treatments and pool' },
    { icon: Coffee, name: 'Room Service', description: '24/7 room service available' }
  ];

  const handleBookRoom = (roomId) => {
    console.log('Booking room:', roomId);
  };

  return (
    <div>
      <Hero />
      
      {/* Featured Rooms */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Rooms</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our most popular rooms, each designed to provide the ultimate comfort and luxury experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} onBook={handleBookRoom} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Amenities */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hotel Amenities</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enjoy world-class amenities and services designed to make your stay unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-dark-700 p-6 rounded-lg text-center hover:bg-dark-600 transition-colors">
                <amenity.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{amenity.name}</h3>
                <p className="text-gray-400">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your stay at Moonlight Hotel and discover why our guests keep coming back.
          </p>
          <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Your Stay Now
          </button>
        </div>
      </section>
    </div>
  );
};