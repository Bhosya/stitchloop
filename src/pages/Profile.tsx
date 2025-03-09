import { Settings, ShoppingBag, Heart, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-serif font-bold text-[#8B4513]">Sarah Johnson</h1>
                <p className="text-[#666666]">Sustainable Fashion Enthusiast</p>
              </div>
            </div>
            <button className="p-2 hover:bg-[#E2D5C3] rounded-full transition-colors" onClick={() => {navigate('/profile/edit')}}>
              <Settings className="h-6 w-6 text-[#8B4513]" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-[#FAF7F2] rounded-lg">
              <ShoppingBag className="h-6 w-6 mx-auto text-[#8B4513] mb-2" />
              <span className="block font-bold text-[#8B4513]">23</span>
              <span className="text-sm text-[#666666]">Items Sold</span>
            </div>
            <div className="text-center p-4 bg-[#FAF7F2] rounded-lg">
              <Heart className="h-6 w-6 mx-auto text-[#8B4513] mb-2" />
              <span className="block font-bold text-[#8B4513]">45</span>
              <span className="text-sm text-[#666666]">Wishlist</span>
            </div>
            <div className="text-center p-4 bg-[#FAF7F2] rounded-lg">
              <Award className="h-6 w-6 mx-auto text-[#8B4513] mb-2" />
              <span className="block font-bold text-[#8B4513]">1,250</span>
              <span className="text-sm text-[#666666]">Points</span>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-[#8B4513]">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-lg">
                <div>
                  <h3 className="font-medium text-[#5C4033]">Vintage Denim Jacket</h3>
                  <p className="text-sm text-[#666666]">Listed for sale</p>
                </div>
                <span className="text-sm text-[#666666]">2 days ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-lg">
                <div>
                  <h3 className="font-medium text-[#5C4033]">30-Day Challenge</h3>
                  <p className="text-sm text-[#666666]">Completed challenge</p>
                </div>
                <span className="text-sm text-[#666666]">1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;