import React from 'react';
import { Users, Wifi, Car, Coffee, Star, MapPin, Heart } from 'lucide-react';

const RoomCard = ({ room, onBook }) => {
  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'breakfast': return <Coffee className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 border border-slate-700/50">
      
      <div className="absolute top-4 left-4 z-10">
        <button className="p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors">
          <Heart className="h-4 w-4 text-white hover:text-red-400" />
        </button>
      </div>
      
      <div className="relative overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          ${room.price}
          <span className="text-xs opacity-90">/night</span>
        </div>
        
       
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
          <MapPin className="h-3 w-3 text-white" />
          <span className="text-white text-xs">{room.location || 'Prime Location'}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white leading-tight">{room.name}</h3>
          <div className="flex items-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-semibold text-sm">{room.rating}</span>
          </div>
        </div>
        
        <p className="text-slate-300 mb-4 leading-relaxed">{room.description}</p>
        
        <div className="flex items-center text-slate-300 mb-5">
          <div className="flex items-center space-x-2 bg-slate-700/50 px-3 py-2 rounded-lg">
            <Users className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium">Up to {room.capacity} guests</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-600 px-3 py-2 rounded-xl text-sm border border-slate-600/50 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300">
              <span className="text-purple-400">{getAmenityIcon(amenity)}</span>
              <span className="text-slate-200 font-medium">{amenity}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => onBook(room.id)}
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 rounded-xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};


export default function RoomCardDemo() {
  const room = {
    id: 2,
    name: "Cozy Mountain Cabin",
    price: 189,
    rating: 4.6,
    description: "Rustic cabin nestled in the mountains with fireplace and hiking trails nearby. Experience nature at its finest.",
    capacity: 2,
    location: "Mountain View",
    amenities: ["WiFi", "Parking", "Fireplace", "Hiking Access"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=400&fit=crop"
  };

  const handleBook = (roomId) => {
    alert(`Booking room ${roomId}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            Luxury Accommodations
          </h1>
          <p className="text-slate-300 text-lg">
            Discover exceptional stays with premium amenities and breathtaking views
          </p>
        </div>
        
        <RoomCard room={room} onBook={handleBook} />
      </div>
    </div>
  );
}