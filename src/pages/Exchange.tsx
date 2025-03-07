import React from 'react';
import { ArrowLeftRight, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Exchange = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-4">Exchange Hub</h1>
        <p className="text-[#666666] max-w-2xl mx-auto">
          Trade your pre-loved clothing items with other fashion enthusiasts. Help reduce waste and refresh your wardrobe sustainably.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Upload className="h-6 w-6 text-[#8B4513] mr-2" />
            <h2 className="text-2xl font-serif text-[#8B4513]">List Your Items</h2>
          </div>
          <p className="text-[#666666] mb-6">
            Share your clothing items that are ready for a new home. Upload photos and details to start trading.
          </p>
          <button 
            onClick={() => navigate('/exchange/upload')}
            className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] transition-colors"
          >
            Upload Items
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <ArrowLeftRight className="h-6 w-6 text-[#8B4513] mr-2" />
            <h2 className="text-2xl font-serif text-[#8B4513]">Browse Exchanges</h2>
          </div>
          <p className="text-[#666666] mb-6">
            Discover items available for exchange. Find your perfect match and propose a trade.
          </p>
          <button 
            onClick={() => navigate('/exchange/available')}
            className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] transition-colors"
          >
            View Available Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exchange;