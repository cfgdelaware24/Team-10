import backgroundImage from './SpurImpactLogo.png'; // Adjust the path to your image
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gray-100"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', // Cover the entire container
                backgroundPosition: 'center', // Center the image
                opacity: 0.9, // Adjust transparency (0 to 1)
            }}
        >
            <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Welcome to De-Impact!</h1>
                <h2 className="text-2xl font-bold mb-4 text-right mr-21 pr-16">What are you?</h2>
                <div className="flex space-x-4">
                    <button
                        className="px-10 py-2 bg-blue-500 text-white rounded"
                        onClick={() => navigate('/signup')}
                    >
                        NGO
                    </button>
                    <button
                        className="px-5 py-2 bg-green-500 text-white rounded"
                        onClick={() => navigate('/signup')}
                    >
                        Professional
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;

