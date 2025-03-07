import React from 'react';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: '30-Day No New Clothes',
    description: 'Commit to not buying any new clothes for 30 days. Shop your own closet and get creative!',
    participants: 1234,
    daysLeft: 15,
    points: 500,
  },
  {
    id: 2,
    title: 'Sustainable Styling',
    description: 'Create 7 different outfits using only second-hand or sustainable pieces.',
    participants: 856,
    daysLeft: 20,
    points: 300,
  },
];

const Challenges = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-[#8B4513] mb-4">Sustainability Challenges</h1>
        <p className="text-[#666666] max-w-2xl mx-auto">
          Join our community challenges to make a positive impact on the environment while earning rewards.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-serif font-bold text-[#8B4513] mb-4 flex items-center">
              <Trophy className="h-6 w-6 mr-2" />
              {challenge.title}
            </h2>
            <p className="text-[#666666] mb-6">{challenge.description}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <Users className="h-5 w-5 mx-auto text-[#8B4513]" />
                <span className="block mt-1 text-sm text-[#666666]">{challenge.participants} Joined</span>
              </div>
              <div className="text-center">
                <Calendar className="h-5 w-5 mx-auto text-[#8B4513]" />
                <span className="block mt-1 text-sm text-[#666666]">{challenge.daysLeft} Days Left</span>
              </div>
              <div className="text-center">
                <Award className="h-5 w-5 mx-auto text-[#8B4513]" />
                <span className="block mt-1 text-sm text-[#666666]">{challenge.points} Points</span>
              </div>
            </div>

            <button className="w-full bg-[#8B4513] text-white py-3 rounded-md hover:bg-[#5C4033] transition-colors">
              Join Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;