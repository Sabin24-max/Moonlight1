import React from 'react';
import { Calendar, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Welcome to 
          <span className="block text-primary-500">Moonlight</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience luxury and comfort in the heart of the city. Where every night becomes a beautiful memory.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Book Now
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-dark-900 transition-colors flex items-center justify-center gap-2">
            <Users className="h-5 w-5" />
            View Rooms
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-dark-800/80 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-primary-500 text-2xl font-bold mb-2">24/7</h3>
            <p className="text-gray-300">Room Service</p>
          </div>
          <div className="bg-dark-800/80 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-primary-500 text-2xl font-bold mb-2">5★</h3>
            <p className="text-gray-300">Luxury Experience</p>
          </div>
          <div className="bg-dark-800/80 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-primary-500 text-2xl font-bold mb-2">100+</h3>
            <p className="text-gray-300">Premium Rooms</p>
          </div>
        </div>
      </div>
    </section>
  );
};