import React, { useState, useEffect } from 'react';
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminPage() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    occupancyRate: 0,
    guestSatisfaction: 0
  });
  
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchBookings();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Fallback data
      setStats({
        totalBookings: 145,
        totalRevenue: 78950,
        occupancyRate: 87,
        guestSatisfaction: 4.8
      });
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      // Fallback data
      setBookings([
        {
          id: '1',
          guestName: 'John Doe',
          roomType: 'Deluxe Ocean View',
          checkIn: '2024-01-15',
          checkOut: '2024-01-18',
          status: 'confirmed',
          totalAmount: 897
        },
        {
          id: '2',
          guestName: 'Jane Smith',
          roomType: 'Presidential Suite',
          checkIn: '2024-01-20',
          checkOut: '2024-01-25',
          status: 'pending',
          totalAmount: 2995
        }
      ]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-900/50 text-green-200';
      case 'pending': return 'bg-yellow-900/50 text-yellow-200';
      case 'cancelled': return 'bg-red-900/50 text-red-200';
      default: return 'bg-gray-900/50 text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
          <p className="text-white text-lg">
            Manage bookings, view statistics, and monitor hotel performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Total Bookings</p>
                <p className="text-2xl font-bold text-white">{stats.totalBookings}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Occupancy Rate</p>
                <p className="text-2xl font-bold text-white">{stats.occupancyRate}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Guest Satisfaction</p>
                <p className="text-2xl font-bold text-white">{stats.guestSatisfaction}/5</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-600">
            <h2 className="text-xl font-bold text-white">Recent Bookings</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Guest</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Room</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Check-in</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Check-out</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{booking.guestName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{booking.roomType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{booking.checkIn}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">{booking.checkOut}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">${booking.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}