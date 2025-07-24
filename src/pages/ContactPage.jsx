import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black py-20 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '700ms' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '1000ms' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Get in touch with our team. We're here to help with any questions or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {[
                { Icon: MapPin, color: 'text-blue-400', title: 'Address', content: 'Thamel,Kathmandu' },
                { Icon: Phone, color: 'text-purple-400', title: 'Phone', content: '9860341377' },
                { Icon: Mail, color: 'text-pink-400', title: 'Email', content: 'moonlighthotel@gmail.com' },
                { Icon: Clock, color: 'text-yellow-400', title: 'Hours', content: '24/7 Front Desk Service\nConcierge: 6:00 AM - 11:00 PM' }
              ].map(({ Icon, color, title, content }, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900 border border-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <Icon className={`h-6 w-6 ${color} mt-1`} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-white whitespace-pre-line">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div>
            <div className="bg-gray-900 border border-black rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-all duration-300"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Enter your message here..."
                    className="w-full px-4 py-3 bg-gray-800 border border-black rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
