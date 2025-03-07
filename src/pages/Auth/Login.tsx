import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
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
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-[#666666]">
            Sign in to your StitchLoop account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513] border-[#E2D5C3] rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#666666]">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-[#8B4513] hover:text-[#5C4033]">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#8B4513] hover:bg-[#5C4033] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B4513]"
          >
            <LogIn className="h-5 w-5 mr-2" />
            Sign In
          </button>

          <div className="text-center">
            <p className="text-sm text-[#666666]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#8B4513] hover:text-[#5C4033]">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;