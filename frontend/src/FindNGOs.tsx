import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import SpurImpactLogo from './SpurImpactLogo.png'; // Adjust the path for image logo

// Define the NGO type
interface NGO {
  name: string;
  description: string;
  details: string;
  positionId: number; // Add positionId to match the API requirements
  professionalId: number; // Add professionalId to match the API requirements
}

const FindNGOs: React.FC = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Sample data for NGOs. You can replace this with actual dynamic data.
  const ngosData: NGO[] = [
    {
      name: 'Helping Hands',
      description: 'An NGO focused on homelessness relief.',
      details: 'Based in Wilmington, Delaware. Established in 2010. Focus areas include advocacy and providing shelter.',
      positionId: 1, // Sample positionId
      professionalId: 101, // Sample professionalId
    },
    {
      name: 'Green Earth Initiative',
      description: 'Focused on environmental protection.',
      details: 'Operating globally since 2005. Works on reforestation and climate change awareness.',
      positionId: 2, // Sample positionId
      professionalId: 102, // Sample professionalId
    },
    {
      name: 'Teach for Change',
      description: 'Dedicated to providing education to underserved communities.',
      details: 'Established in 2015, focusing on rural areas with limited access to quality education.',
      positionId: 3, // Sample positionId
      professionalId: 103, // Sample professionalId
    },
  ];

  const handleTop = (ngo: NGO) => {
    alert(`You favorited ${ngo.name}`);
  };

  const handleLikePosition = async (positionId: number, professionalId: number) => {
    try {
      await axios.post(`/positions/${positionId}/like/${professionalId}`);
      console.log(`Liked position ${positionId} by professional ${professionalId}`);
    } catch (error) {
      console.error('Error liking position:', error);
    }
  };

  const handleNext = () => {
    if (currentIndex < ngosData.length - 1) {
      const { positionId, professionalId } = ngosData[currentIndex];

      // Call the API to like the position
      handleLikePosition(positionId, professionalId);

      // Move to the next card
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Navigation bar */}
      <div className="w-full bg-blue-500 p-4 flex justify-between items-center fixed top-0">
        <div className="flex items-center">
          {/* Add logo image next to the title */}
          <img src={SpurImpactLogo} alt="Spur Impact Logo" className="h-10 mr-2" />
          <h1 className="text-white text-2xl font-bold">De-Impact</h1>
        </div>

        {/* Navigation buttons */}
        <div className="space-x-4">
          {/* Button to navigate to welcome page */}
          <button
            className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate('/WelcomePage')}
          >
            Welcome Page
          </button>

          {/* Button to navigate to edit profile for NGO */}
          <button
            className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate('/ProfApplications')}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8">Find NGOs</h1>
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <button
            className="text-3xl text-gray-700 hover:text-gray-900 disabled:text-gray-400"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <div 
            className="flex-grow mx-4 cursor-pointer"
            onClick={handleFlip}
          >
            <div className={`${isFlipped ? 'hidden' : ''}`}>
              <h3 className="text-2xl font-semibold mb-2">{ngosData[currentIndex].name}</h3>
              <p className="text-lg text-gray-600">{ngosData[currentIndex].description}</p>
            </div>
            <div className={`${isFlipped ? '' : 'hidden'}`}>
              <h3 className="text-2xl font-semibold mb-2">Details</h3>
              <p className="text-lg text-gray-600">{ngosData[currentIndex].details}</p>
            </div>
          </div>
          <button
            className="text-3xl text-gray-700 hover:text-gray-900 disabled:text-gray-400"
            onClick={handleNext}
            disabled={currentIndex === ngosData.length - 1}
          >
            &gt;
          </button>
        </div>
        <div className="border-t border-gray-200 p-4 text-center">
          <button
            className="px-6 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleFavorite}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindNGOs;
