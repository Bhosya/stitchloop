import React from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';

const wishlistItems = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Classic White Blouse',
    price: '$35.00',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80',
  },
];

const Wishlist = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-8">My Wishlist</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-[#E2D5C3] transition-colors">
                <Trash2 className="h-5 w-5 text-[#8B4513]" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-serif font-bold text-[#8B4513] mb-2">{item.name}</h2>
              <p className="text-[#666666] mb-4">{item.price}</p>
              <button className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] transition-colors flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-[#8B4513] mx-auto mb-4" />
          <p className="text-[#666666]">Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;