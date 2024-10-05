import React, { useState } from 'react';

// Define the NGO type
interface NGO {
  name: string;
  description: string;
  details: string;
}

const FindNGOs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Sample data for NGOs. You can replace this with actual dynamic data.
  const ngosData: NGO[] = [
    {
      name: 'Helping Hands',
      description: 'An NGO focused on homelessness relief.',
      details: 'Based in Wilmington, Delaware. Established in 2010. Focus areas include advocacy and providing shelter.',
    },
    {
      name: 'Green Earth Initiative',
      description: 'Focused on environmental protection.',
      details: 'Operating globally since 2005. Works on reforestation and climate change awareness.',
    },
    {
      name: 'Teach for Change',
      description: 'Dedicated to providing education to underserved communities.',
      details: 'Established in 2015, focusing on rural areas with limited access to quality education.',
    },
  ];

  // Function to handle the 'Top' action (e.g., when an NGO is "upvoted" or favorited)
  const handleTop = (ngo: NGO) => {
    alert(`You favorited ${ngo.name}`);
  };

  // Function to handle the 'Right' action (e.g., next NGO)
  const handleRight = (ngo: NGO) => {
    console.log(`You navigated to ${ngo.name}`);
  };

  const handleNext = () => {
    if (currentIndex < ngosData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      handleRight(ngosData[currentIndex]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFavorite = () => {
    handleTop(ngosData[currentIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Find NGOs</h1>
      <div className="relative flex items-center justify-center space-x-4">
        <button 
          className="text-2xl text-gray-700 hover:text-gray-900 disabled:text-gray-400" 
          onClick={handlePrevious} 
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div
          className={`relative w-64 h-96 bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={handleFlip}
        >
          {/* Card Front */}
          <div className={`absolute inset-0 backface-hidden p-4 ${isFlipped ? 'hidden' : ''}`}>
            <h3 className="text-xl font-semibold mb-2">{ngosData[currentIndex].name}</h3>
            <p className="text-gray-600">{ngosData[currentIndex].description}</p>
          </div>
          
          {/* Card Back */}
          <div className={`absolute inset-0 backface-hidden p-4 transform rotate-y-180 ${isFlipped ? '' : 'hidden'}`}>
            <h3 className="text-xl font-semibold mb-2">Details</h3>
            <p className="text-gray-600">{ngosData[currentIndex].details}</p>
          </div>
        </div>
        <button 
          className="text-2xl text-gray-700 hover:text-gray-900 disabled:text-gray-400" 
          onClick={handleNext} 
          disabled={currentIndex === ngosData.length - 1}
        >
          &gt;
        </button>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" 
        onClick={handleFavorite}
      >
        Favorite
      </button>
    </div>
  );
};

export default FindNGOs;
