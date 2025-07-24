import React from 'react';
import { Users, Wifi, Car, Coffee, Star } from 'lucide-react';

export const RoomCard = ({ room, onBook }) => {
  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'breakfast': return <Coffee className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
      <div className="relative">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {room.price}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{room.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-gray-300">{room.rating}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4">{room.description}</p>

        <div className="flex items-center text-gray-300 text-sm mb-4">
          <Users className="h-4 w-4 mr-2" />
          <span>Up to {room.capacity} guests</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onBook(room.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
