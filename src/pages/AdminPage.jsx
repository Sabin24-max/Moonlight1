import React, { useState } from 'react';
import {
  Users, Calendar, DollarSign, TrendingUp, Search,
  Bell, Settings, Download, Eye, Edit, Trash2, Plus
} from 'lucide-react';

export default function AdminPage() {
  const [stats] = useState({
    totalBookings: 145,
    totalRevenue: 78950,
    occupancyRate: 87,
    guestSatisfaction: 4.8
  });

  const [bookings] = useState([
    { id: '1', guestName: 'John Doe', roomType: 'Deluxe Ocean View', checkIn: '2024-01-15', checkOut: '2024-01-18', status: 'confirmed', totalAmount: 897, nights: 3 },
    { id: '2', guestName: 'Jane Smith', roomType: 'Presidential Suite', checkIn: '2024-01-20', checkOut: '2024-01-25', status: 'pending', totalAmount: 2995, nights: 5 },
    { id: '3', guestName: 'Mike Johnson', roomType: 'Standard Room', checkIn: '2024-01-22', checkOut: '2024-01-24', status: 'confirmed', totalAmount: 298, nights: 2 },
    { id: '4', guestName: 'Sarah Wilson', roomType: 'Family Suite', checkIn: '2024-01-25', checkOut: '2024-01-28', status: 'cancelled', totalAmount: 645, nights: 3 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-600/10 text-green-400 border border-green-500/30';
      case 'pending': return 'bg-yellow-600/10 text-yellow-400 border border-yellow-500/30';
      case 'cancelled': return 'bg-red-600/10 text-red-400 border border-red-500/30';
      default: return 'bg-gray-600/10 text-gray-400 border border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return '✓';
      case 'pending': return '⏳';
      case 'cancelled': return '✕';
      default: return '?';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.roomType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-400 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            Live booking management & stats
          </p>
        </div>
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full">
            <Bell className="h-5 w-5 text-white" />
          </button>
          <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full">
            <Settings className="h-5 w-5 text-white" />
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow hover:scale-105 transition-transform">
            <Plus className="h-4 w-4" />
            New Booking
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Bookings', value: stats.totalBookings, icon: <Calendar className="text-blue-400 h-8 w-8" />, trend: '+12%' },
          { label: 'Total Revenue', value: `₹${stats.totalRevenue.toLocaleString()}`, icon: <DollarSign className="text-green-400 h-8 w-8" />, trend: '+18%' },
          { label: 'Occupancy Rate', value: `${stats.occupancyRate}%`, icon: <TrendingUp className="text-purple-400 h-8 w-8" />, progress: stats.occupancyRate },
          {
            label: 'Guest Satisfaction',
            value: `${stats.guestSatisfaction}/5`,
            icon: <Users className="text-yellow-400 h-8 w-8" />,
            stars: Math.floor(stats.guestSatisfaction)
          }
        ].map((card, i) => (
          <div key={i} className="bg-gray-900/80 backdrop-blur-md border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-400">{card.label}</p>
                <h2 className="text-2xl font-bold mt-1">{card.value}</h2>
                {card.trend && <p className="text-green-400 text-xs mt-1">↑ {card.trend} from last month</p>}
                {card.progress && (
                  <div className="mt-2 w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2"
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                )}
                {card.stars !== undefined && (
                  <div className="mt-2 text-yellow-400 text-sm">
                    {'★'.repeat(card.stars)}<span className="text-gray-600">{'★'.repeat(5 - card.stars)}</span>
                  </div>
                )}
              </div>
              <div className="p-3 bg-gray-800 rounded-xl">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search guests or rooms..."
            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3 items-center">
          <select
            className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:bg-gray-800">
            <Download className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow">
        <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="text-purple-400 h-5 w-5" />
            Recent Bookings
            <span className="ml-2 bg-purple-500/20 text-purple-300 text-sm px-2 py-0.5 rounded-full">
              {filteredBookings.length}
            </span>
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                {['Guest', 'Room', 'Check-in', 'Check-out', 'Status', 'Amount', 'Actions'].map(header => (
                  <th key={header} className="px-6 py-3 text-left text-sm font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-800 group">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white">
                      {booking.guestName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{booking.guestName}</div>
                      <div className="text-gray-400 text-sm">{booking.nights} nights</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{booking.roomType}</td>
                  <td className="px-6 py-4">{booking.checkIn}</td>
                  <td className="px-6 py-4">{booking.checkOut}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-sm rounded-full inline-flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)} {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>₹{booking.totalAmount}</div>
                    <div className="text-sm text-gray-400">₹{Math.round(booking.totalAmount / booking.nights)}/night</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-lg">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
