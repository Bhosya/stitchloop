import React, { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: 'Vintage Denim Jacket',
    description: 'Classic vintage denim jacket from the 90s. Perfect condition with authentic wear patterns.',
    size: 'M',
    condition: 'Good',
    preferredExchange: 'Looking for a leather jacket or similar outerwear',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    owner: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    },
  },
  {
    id: 2,
    title: 'Boho Summer Dress',
    description: 'Beautiful floral print dress, perfect for summer. Worn only once.',
    size: 'S',
    condition: 'Like new',
    preferredExchange: 'Interested in other summer dresses or tops',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=962&q=80',
    owner: {
      name: 'Sophie Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    },
  },
];

const AvailableItems = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    condition: '',
  });

  const handleContact = (itemId: number) => {
    // Handle contact logic
    console.log('Contacting about item:', itemId);
  };

  const handleWishlist = (itemId: number) => {
    // Handle wishlist logic
    console.log('Adding to wishlist:', itemId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/exchange')}
        className="flex items-center text-[#8B4513] hover:text-[#5C4033] mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Exchange
      </button>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-[#8B4513]">Available Items</h1>
        <button
          className="flex items-center px-4 py-2 bg-[#E2D5C3] text-[#8B4513] rounded-md hover:bg-[#D4C3AF]"
        >
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={item.owner.avatar}
                  alt={item.owner.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="ml-2 text-sm text-[#666666]">{item.owner.name}</span>
              </div>
              
              <h2 className="text-xl font-serif font-bold text-[#8B4513] mb-2">{item.title}</h2>
              <p className="text-[#666666] mb-4">{item.description}</p>
              
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-[#FAF7F2] rounded-full text-sm text-[#8B4513]">
                  Size: {item.size}
                </span>
                <span className="px-3 py-1 bg-[#FAF7F2] rounded-full text-sm text-[#8B4513]">
                  {item.condition}
                </span>
              </div>
              
              <p className="text-sm text-[#666666] mb-4">
                <strong>Looking for:</strong> {item.preferredExchange}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => handleContact(item.id)}
                  className="flex-1 bg-[#8B4513] text-white py-2 rounded-md hover:bg-[#5C4033] transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact
                </button>
                <button
                  onClick={() => handleWishlist(item.id)}
                  className="px-4 py-2 bg-[#FAF7F2] text-[#8B4513] rounded-md hover:bg-[#E2D5C3] transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableItems;