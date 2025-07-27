import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const authLinks = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];

  // ✅ FIXED: Removed TypeScript type annotation
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-black backdrop-blur-sm border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Moon className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold text-white">Moonlight</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive(item.path) ? 'text-primary-500' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Auth Links */}
            {authLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive(link.path) ? 'text-primary-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...navigation, ...authLinks].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary-500 ${
                  isActive(item.path) ? 'text-primary-500' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
