import React, { useState } from 'react';

const sampleStories = [
  {
    id: 1,
    title: "The Beginning",
    content: "Once upon a time in the world of Web3...",
    imageUrl: "https://via.placeholder.com/400x200"
  },
  {
    id: 2,
    title: "The Journey",
    content: "As blockchain technology evolved...",
    imageUrl: "https://via.placeholder.com/400x200"
  },
  {
    id: 3,
    title: "The Future",
    content: "The possibilities are endless...",
    imageUrl: "https://via.placeholder.com/400x200"
  }
];

const StoryViewer = ({ theme }) => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [votes, setVotes] = useState(sampleStories.map(story => story.choices));
  const [hasVoted, setHasVoted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const story = sampleStories[currentChapter];

  const handleVote = (choiceId) => {
    if (!hasVoted) {
      setVotes(prevVotes => {
        const newVotes = [...prevVotes];
        const currentChoices = newVotes[currentChapter];
        const choiceIndex = currentChoices.findIndex(c => c.id === choiceId);
        currentChoices[choiceIndex] = {
          ...currentChoices[choiceIndex],
          votes: currentChoices[choiceIndex].votes + 1
        };
        return newVotes;
      });
      setHasVoted(true);
      setIsRevealed(true);
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < sampleStories.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setHasVoted(false);
      setIsRevealed(false);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setHasVoted(false);
      setIsRevealed(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg`}>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="mb-6">{story.content}</p>
          <div className="flex justify-between">
            <button
              onClick={handlePreviousChapter}
              disabled={currentChapter === 0}
              className={`px-4 py-2 rounded transition-colors ${
                currentChapter === 0 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
              }`}
              aria-label="Previous chapter"
            >
              Previous
            </button>
            <button
              onClick={handleNextChapter}
              disabled={currentChapter === sampleStories.length - 1}
              className={`px-4 py-2 rounded transition-colors ${
                currentChapter === sampleStories.length - 1
                  ? 'bg-gray-500 cursor-not-allowed'
                  : theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'
              }`}
              aria-label="Next chapter"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryViewer;