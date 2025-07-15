import React from 'react';
import { Moon, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Star, Award, Clock, Wifi } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-end">
      {/* Sample content above footer */}
      <div className="w-full">
        <div className="h-64 bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Website Content Above</p>
        </div>

        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Top section with premium features */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-sm font-medium">5-Star Rating</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Wifi className="h-5 w-5" />
                  <span className="text-sm font-medium">Free WiFi</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <Moon className="h-10 w-10 text-blue-400" />
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Moonlight
                    </span>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Luxury Hotel</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Experience unparalleled luxury and comfort at Moonlight Hotel, where every stay transforms into an extraordinary journey filled with elegance and sophistication.
                </p>

                {/* Social media */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <Facebook className="relative h-6 w-6 text-gray-400 group-hover:text-blue-400 cursor-pointer transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <Twitter className="relative h-6 w-6 text-gray-400 group-hover:text-cyan-400 cursor-pointer transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <Instagram className="relative h-6 w-6 text-gray-400 group-hover:text-pink-400 cursor-pointer transition-all duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {['Home', 'Rooms', 'Booking', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`/${link.toLowerCase()}`} className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold mb-6 text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Premium Services
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Room Service', icon: '🛎️' },
                    { name: 'Spa & Wellness', icon: '🧘' },
                    { name: 'Conference Rooms', icon: '🏢' },
                    { name: 'Fine Dining', icon: '🍽️' }
                  ].map((service) => (
                    <li key={service.name} className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer">
                      <span className="text-sm">{service.icon}</span>
                      <span>{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-white font-bold mb-6 text-xl text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Kathmandu, Nepal
                  </p>
                </div>

                <div className="group text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    9860341377<br />
                    <span className="text-xs text-gray-400">24/7 Reservations</span>
                  </p>
                </div>

                <div className="group text-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    moonlighthotel@gmail.com<br />
                    <span className="text-xs text-gray-400">Quick Response</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-white/10 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  &copy; 2024 Moonlight Hotel. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
