import React, { useState } from 'react';
import { Moon, Menu, X, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Static background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>
      
      <header className="relative bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50 shadow-2xl">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-full">
                  <Moon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Moonlight
                </span>
                <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                  LUXURY HOTEL
                </span>
              </div>
            </Link>
            
            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    currentPage === item.name
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {currentPage === item.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50"></div>
                  )}
                  <span className="relative flex items-center space-x-2">
                    <span>{item.name}</span>
                    {currentPage === item.name && (
                      <Sparkles className="h-4 w-4" />
                    )}
                  </span>
                </button>
              ))}
            </nav>
            
            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden relative p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-6 w-6 text-white transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
          
          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-6 space-y-2 bg-slate-800/30 backdrop-blur-xl rounded-lg mb-4 border border-slate-700/30">
                {navigation.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                      currentPage === item.name
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <span>{item.name}</span>
                      {currentPage === item.name && (
                        <Sparkles className="h-4 w-4" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Enhanced Demo Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Currently viewing: {currentPage}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Welcome to Moonlight
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience luxury and comfort in our premium accommodations with world-class amenities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-700/50 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-300">
              Explore Rooms
            </button>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Luxury Rooms", desc: "Premium accommodations with stunning views", icon: "🏨" },
            { title: "Fine Dining", desc: "World-class cuisine and exceptional service", icon: "🍽️" },
            { title: "Spa & Wellness", desc: "Rejuvenate your mind, body, and soul", icon: "🧘‍♀️" }
          ].map((feature, index) => (
            <div key={index} className="group p-6 bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}