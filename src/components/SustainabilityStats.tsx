import React from "react";
import { Recycle, Users, TreePine, ShoppingBag } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Items Recycled",
    value: "50K+",
    icon: ShoppingBag,
  },
  {
    id: 2,
    name: "Active Members",
    value: "10K+",
    icon: Users,
  },
  {
    id: 3,
    name: "CO₂ Saved",
    value: "100T",
    icon: Recycle,
  },
  {
    id: 4,
    name: "Trees Planted",
    value: "5K+",
    icon: TreePine,
  },
];

const SustainabilityStats = () => {
  return (
    <div className="bg-[#E2D5C3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#FAF7F2] px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6 transform hover:scale-105 transition-transform duration-200"
            >
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
                  <p className="mt-1 text-sm text-[#666666]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={(e) => handleAddToWishlist(e, product.id)}
                  className="text-[#8B4513] hover:text-[#5C4033] transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityStats;
