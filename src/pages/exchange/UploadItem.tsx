import React, { useState } from 'react';
import { Upload, Camera, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UploadItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    size: '',
    preferredExchange: '',
    images: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    navigate('/exchange/available');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/exchange')}
        className="flex items-center text-[#8B4513] hover:text-[#5C4033] mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Exchange
      </button>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-serif font-bold text-[#8B4513] mb-8">Upload Item for Exchange</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-[#5C4033] mb-2">
                Upload Images
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="aspect-square border-2 border-dashed border-[#E2D5C3] rounded-lg flex items-center justify-center cursor-pointer hover:border-[#8B4513] transition-colors"
                  >
                    <Camera className="h-8 w-8 text-[#8B4513]" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-[#5C4033]">
                Item Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-[#5C4033]">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-[#5C4033]">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                  required
                >
                  <option value="">Select category</option>
                  <option value="dresses">Dresses</option>
                  <option value="tops">Tops</option>
                  <option value="bottoms">Bottoms</option>
                  <option value="outerwear">Outerwear</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-[#5C4033]">
                  Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                  required
                >
                  <option value="">Select size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-[#5C4033]">
                Condition
              </label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
                required
              >
                <option value="">Select condition</option>
                <option value="new">New with tags</option>
                <option value="likeNew">Like new</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredExchange" className="block text-sm font-medium text-[#5C4033]">
                Preferred Exchange
              </label>
              <input
                type="text"
                id="preferredExchange"
                name="preferredExchange"
                value={formData.preferredExchange}
                onChange={handleChange}
                placeholder="What would you like in exchange? (e.g., 'Similar size dress' or 'Any accessories')"
                className="mt-1 block w-full rounded-md border-[#E2D5C3] shadow-sm focus:border-[#8B4513] focus:ring focus:ring-[#8B4513] focus:ring-opacity-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] transition-colors flex items-center justify-center"
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadItem;