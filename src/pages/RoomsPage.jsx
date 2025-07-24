import React, { useState, useEffect } from 'react';
import { RoomCard } from '../components/RoomCard';
import { Search, Filter } from 'lucide-react';

export const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [capacity, setCapacity] = useState('all');

  const sampleRooms = [
    {
      id: '1',
      name: 'Standard Room',
      image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 149 * 133, // Converted to NRs
      capacity: 2,
      amenities: ['WiFi', 'Parking'],
      rating: 4.5,
      description: 'Comfortable and elegant room with all essential amenities.',
    },
    {
      id: '2',
      name: 'Deluxe Ocean View',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299 * 133,
      capacity: 2,
      amenities: ['WiFi', 'Parking', 'Breakfast'],
      rating: 4.8,
      description: 'Luxurious room with stunning ocean views and modern amenities.',
    },
    {
      id: '3',
      name: 'Presidential Suite',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 599 * 133,
      capacity: 4,
      amenities: ['WiFi', 'Parking', 'Breakfast'],
      rating: 4.9,
      description: 'Ultimate luxury suite with separate living area and premium services.',
    },
    {
      id: '4',
      name: 'Family Suite',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 399 * 133,
      capacity: 6,
      amenities: ['WiFi', 'Parking', 'Breakfast'],
      rating: 4.7,
      description: 'Spacious family suite with multiple bedrooms and living area.',
    },
    {
      id: '5',
      name: 'Business Room',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 199 * 133,
      capacity: 2,
      amenities: ['WiFi', 'Parking'],
      rating: 4.6,
      description: 'Perfect for business travelers with dedicated workspace.',
    },
  ];

  useEffect(() => {
    setRooms(sampleRooms);
    setFilteredRooms(sampleRooms);
  }, []);

  useEffect(() => {
    filterRooms();
  }, [rooms, searchTerm, priceRange, capacity]);

  const filterRooms = () => {
    let filtered = rooms.filter(
      (room) =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter((room) =>
        max ? room.price >= min && room.price <= max : room.price >= min
      );
    }

    if (capacity !== 'all') {
      filtered = filtered.filter((room) => room.capacity >= parseInt(capacity));
    }

    setFilteredRooms(filtered);
  };

  const handleBookRoom = (roomId) => {
    console.log('Booking room:', roomId);
  };

  return (
    <div className="min-h-screen bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our selection of beautifully designed rooms, each offering comfort and luxury.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="all">All Prices</option>
              <option value="0-26600">Rs 0 - Rs 26,600</option>
              <option value="26600-53200">Rs 26,600 - Rs 53,200</option>
              <option value="53200-79800">Rs 53,200 - Rs 79,800</option>
              <option value="79800">Rs 79,800+</option>
            </select>

            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="all">Any Capacity</option>
              <option value="1">1+ Guests</option>
              <option value="2">2+ Guests</option>
              <option value="3">3+ Guests</option>
              <option value="4">4+ Guests</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={{ ...room, price: `Rs ${room.price.toLocaleString()}` }}
              onBook={handleBookRoom}
            />
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No rooms found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
