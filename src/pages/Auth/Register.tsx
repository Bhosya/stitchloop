import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-serif font-bold text-center text-[#8B4513]">
            Create Account
          </h2>
          <p className="mt-2 text-center text-[#666666]">
            Join the sustainable fashion movement
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#5C4033]">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
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
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#5C4033]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#5C4033]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              />
            </div>

            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513] border-[#E2D5C3] rounded"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-[#666666]">
                I agree to the{' '}
                <a href="#" className="text-[#8B4513] hover:text-[#5C4033]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#8B4513] hover:text-[#5C4033]">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#8B4513] hover:bg-[#5C4033] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B4513]"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Create Account
          </button>

          <div className="text-center">
            <p className="text-sm text-[#666666]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#8B4513] hover:text-[#5C4033]">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;