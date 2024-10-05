import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfProfilePage: React.FC = () => {
  const location = useLocation();
  const { name, location: userLocation, skills, sector } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-3/4 md:w-1/2">
        <div className="flex flex-col items-center">
          {/* Placeholder for logo */}
          <img src="https://via.placeholder.com/150" alt="Profile Logo" className="w-32 h-32 mb-4" />
          
          <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
          <p className="text-lg mb-2"><strong>Name:</strong> {name}</p>
          <p className="text-lg mb-2"><strong>Location:</strong> {userLocation}</p>
          <p className="text-lg mb-2"><strong>Skills:</strong> {skills}</p>
          <p className="text-lg mb-2"><strong>Sector:</strong> {sector}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfProfilePage;
