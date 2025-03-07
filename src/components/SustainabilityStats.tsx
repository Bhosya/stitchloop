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
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-[#8B4513]" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-[#666666]">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-semibold text-[#8B4513]">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityStats;
