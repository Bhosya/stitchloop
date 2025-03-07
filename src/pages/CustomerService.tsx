import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerService = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the support ticket
    alert('Support ticket submitted successfully!');
    navigate('/');
  };

  const handleStartChat = () => {
    // In a real app, this would open a chat window
    alert('Live chat feature coming soon!');
  };

  const handleCall = () => {
    window.location.href = 'tel:1-800-FASHION';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:support@stitchloop.com';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-8">Customer Service</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <button onClick={handleCall} className="w-full h-full">
            <Phone className="h-8 w-8 text-[#8B4513] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#5C4033] mb-2">Call Us</h3>
            <p className="text-[#666666]">1-800-FASHION</p>
            <p className="text-sm text-[#666666] mt-2">Mon-Fri: 9AM-6PM EST</p>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <button onClick={handleEmail} className="w-full h-full">
            <Mail className="h-8 w-8 text-[#8B4513] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#5C4033] mb-2">Email Us</h3>
            <p className="text-[#666666]">support@stitchloop.com</p>
            <p className="text-sm text-[#666666] mt-2">24/7 Support</p>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <button onClick={handleStartChat} className="w-full h-full">
            <MessageCircle className="h-8 w-8 text-[#8B4513] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#5C4033] mb-2">Live Chat</h3>
            <p className="text-[#666666]">Chat with our team</p>
            <p className="text-sm text-[#666666] mt-2">Available 24/7</p>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-serif font-bold text-[#8B4513] mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#5C4033]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#5C4033]">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#5C4033]">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerService;