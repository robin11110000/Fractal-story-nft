import React from 'react';

const Achievements = ({ theme }) => {
  const achievements = [
    { id: 1, name: "First Chapter", icon: "📚" },
    { id: 2, name: "First Vote", icon: "🗳️" },
    { id: 3, name: "Premium Reader", icon: "⭐" }
  ];

  return (
    <div className={`mt-4 p-4 rounded-lg ${
      theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
    }`}>
      <h2 className="text-xl font-bold mb-2">Achievements</h2>
      <div className="flex gap-2">
        {achievements.map(achievement => (
          <div 
            key={achievement.id}
            className={`p-2 rounded ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-white'
            } flex items-center gap-2`}
          >
            <span>{achievement.icon}</span>
            <span>{achievement.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;