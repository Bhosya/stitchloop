import React from 'react';
import { Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Classic White Blouse',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=962&q=80',
  },
  {
    id: 3,
    name: 'Retro Leather Bag',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80',
  },
  {
    id: 4,
    name: 'Wool Sweater',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
  },
];

const Shop = () => {
  const navigate = useNavigate();

  const handleAddToWishlist = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    // In a real app, this would add to wishlist state
    navigate('/wishlist');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-8">Shop Sustainable Fashion</h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/shop/${product.id}`}>
              <div className="w-full aspect-square rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center lg:w-full lg:h-full hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-[#5C4033] hover:underline">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#666666]">${product.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={(e) => handleAddToWishlist(e, product.id)}
                  className="text-[#8B4513] hover:text-[#5C4033] transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;