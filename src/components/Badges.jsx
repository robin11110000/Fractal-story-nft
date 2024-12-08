import { useState, useEffect } from 'react';

const Badges = ({ theme, hasVoted, hasNFT }) => {
  const [achievements, setAchievements] = useState([
    { id: 1, name: "Wallet Connected", icon: "🔗", unlocked: false },
    { id: 2, name: "First Vote Cast", icon: "🗳️", unlocked: false },
    { id: 3, name: "NFT Holder", icon: "🏆", unlocked: false }
  ]);

  useEffect(() => {
    setAchievements(prev => prev.map(badge => ({
      ...badge,
      unlocked: 
        (badge.name === "First Vote Cast" && hasVoted) ||
        (badge.name === "NFT Holder" && hasNFT)
    })));
  }, [hasVoted, hasNFT]);

  return (
    <div className={`mt-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      <div className="grid grid-cols-3 gap-4">
        {achievements.map(badge => (
          <div 
            key={badge.id}
            className={`p-4 rounded-lg text-center transition-all ${
              badge.unlocked
                ? theme === 'dark' 
                  ? 'bg-green-600' 
                  : 'bg-green-400'
                : theme === 'dark'
                  ? 'bg-gray-800'
                  : 'bg-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">{badge.icon}</div>
            <div className="font-medium">{badge.name}</div>
            <div className="text-sm mt-1">
              {badge.unlocked ? 'Unlocked!' : 'Locked'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;