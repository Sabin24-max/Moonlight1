// src/components/Footer.jsx
import React from 'react';
import {
  Moon,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Moon className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">Moonlight</span>
            </div>
            <p className="text-gray-400 mb-4">
              Experience luxury and comfort at Moonlight Hotel, where every stay is a memorable journey.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="/rooms" className="text-gray-400 hover:text-primary-500 transition-colors">Rooms</a></li>
              <li><a href="/booking" className="text-gray-400 hover:text-primary-500 transition-colors">Booking</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Room Service</span></li>
              <li><span className="text-gray-400">Spa & Wellness</span></li>
              <li><span className="text-gray-400">Conference Rooms</span></li>
              <li><span className="text-gray-400">Restaurant</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-gray-400">123 Hotel Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-400">info@moonlighthotel.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-dark-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Moonlight Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
