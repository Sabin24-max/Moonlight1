import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../components/AuthProvider';

const BASE_URL = import.meta.env.VITE_API_URL;

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: '0000000000',
          role: 'user'
        })
      });

      const data = await res.json();

      if (res.ok) {
        login({
          name: data.user.fullName || data.user.name,
          email: data.user.email,
          isAuthenticated: true
        });
        navigate('/');
      } else {
        setErrors({ general: data.message || 'Registration failed' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ general: 'Failed to connect to server' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-zinc-800">
              <User className="mr-2" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-transparent outline-none w-full text-white"
                placeholder="Enter your name"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-zinc-800">
              <Mail className="mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none w-full text-white"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-zinc-800">
              <Lock className="mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent outline-none w-full text-white"
                placeholder="Enter your password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2 text-white">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-zinc-800">
              <Lock className="mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent outline-none w-full text-white"
                placeholder="Confirm your password"
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* General Error */}
          {errors.general && <p className="text-red-500 text-sm text-center">{errors.general}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          {/* Login Link */}
          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
