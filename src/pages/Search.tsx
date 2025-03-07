import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for sustainable fashion..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-[#E2D5C3] focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#666666]" />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-serif font-bold text-[#8B4513] mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {['Vintage Denim', 'Sustainable Dresses', 'Eco-friendly', 'Second-hand', 'Upcycled'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-4 py-2 bg-[#FAF7F2] rounded-full text-[#8B4513] hover:bg-[#E2D5C3] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-serif font-bold text-[#8B4513] mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Shoes'].map((category) => (
              <button
                key={category}
                onClick={() => setSearchQuery(category)}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-[#5C4033] hover:text-[#8B4513]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;