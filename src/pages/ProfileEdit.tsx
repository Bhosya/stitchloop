import React, { useState } from 'react';
import { Camera, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    bio: 'Sustainable Fashion Enthusiast',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/profile')
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-[#8B4513] mb-8">Edit Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Profile Picture */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-[#8B4513] text-white rounded-full hover:bg-[#5C4033]">
              <Camera className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-[#8B4513] mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#5C4033]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5C4033]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-[#5C4033]">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-[#8B4513] mb-4">Change Password</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-[#5C4033]">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-[#5C4033]">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#5C4033]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] flex items-center justify-center"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;