import React, { useState } from 'react';
import { Moon, Menu, X, Sparkles, Star, Crown } from 'lucide-react';

// Mock router components for demo
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={(e) => { e.preventDefault(); onClick && onClick(); }}>
    {children}
  </a>
);

const useLocation = () => ({ pathname: '/' });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');
  
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Enhanced Static Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <header className="relative bg-slate-900/85 backdrop-blur-2xl border-b border-slate-600/40 sticky top-0 z-50 shadow-2xl">
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-indigo-900/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Premium Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 p-3 rounded-full shadow-xl">
                  <Moon className="h-9 w-9 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                  Moonlight
                </span>
                <span className="text-xs text-gray-300 tracking-[0.2em] uppercase font-semibold">
                  LUXURY HOTEL
                </span>
              </div>
            </Link>
            
            {/* Premium Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative px-8 py-4 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                    currentPage === item.name
                      ? 'text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-xl shadow-blue-500/30'
                      : 'text-gray-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {currentPage === item.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl blur-sm opacity-40"></div>
                  )}
                  <span className="relative flex items-center space-x-2">
                    <span>{item.name}</span>
                    {currentPage === item.name && (
                      <Crown className="h-4 w-4 text-yellow-400" />
                    )}
                  </span>
                </button>
              ))}
            </nav>
            
            {/* Premium Mobile Menu Button */}
            <button
              className="md:hidden relative p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition-all duration-300 border border-slate-600/50 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
          
          {/* Premium Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-3 pt-3 pb-8 space-y-3 bg-slate-800/40 backdrop-blur-2xl rounded-xl mb-5 border border-slate-600/30 shadow-xl">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`block w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                      currentPage === item.name
                        ? 'text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-lg'
                        : 'text-gray-200 hover:text-white hover:bg-slate-700/60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span>{item.name}</span>
                      {currentPage === item.name && (
                        <Crown className="h-4 w-4 text-yellow-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Premium Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8 shadow-lg">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-blue-300 text-sm font-semibold">Currently viewing: {currentPage}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Welcome to Moonlight
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury and comfort in our premium accommodations with world-class amenities and exceptional service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Book Your Stay
            </button>
            <button className="px-10 py-5 bg-slate-800/60 border-2 border-slate-600/50 text-white font-bold rounded-xl hover:bg-slate-700/60 hover:border-slate-500/50 transition-all duration-300">
              Explore Rooms
            </button>
          </div>
        </div>
        
        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Luxury Suites", desc: "Spacious premium accommodations with breathtaking city views", icon: "🏨", color: "from-blue-500/20 to-purple-500/20" },
            { title: "Fine Dining", desc: "World-class cuisine crafted by renowned chefs", icon: "🍽️", color: "from-purple-500/20 to-pink-500/20" },
            { title: "Spa & Wellness", desc: "Rejuvenate your mind, body, and soul in our premium spa", icon: "🧘‍♀️", color: "from-indigo-500/20 to-blue-500/20" }
          ].map((feature, index) => (
            <div key={index} className={`group p-8 bg-gradient-to-br ${feature.color} backdrop-blur-2xl rounded-2xl border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl`}>
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Premium Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "25", label: "Luxury Rooms" },
            { number: "Nepal", label: "Countries" },
            { number: "24/7", label: "Service" },
            { number: "5★", label: "Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-600/30">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}