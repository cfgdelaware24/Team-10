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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.9, // Adjust transparency
            }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl">
                <h1 className="text-3xl font-extrabold text-center mb-4">Welcome to De-Impact.</h1>
                <h2 className="text-xl font-semibold text-center mb-6">Who are you?</h2>
                <div className="flex flex-col space-y-4">
                    <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
                        onClick={() => navigate('/signup')}
                    >
                        NGO
                    </button>
                    <button
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200"
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
