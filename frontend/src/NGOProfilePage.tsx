import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpurImpactLogo from './SpurImpactLogo.png'; // Adjust the path for image logo

const NGOProfilePage: React.FC = () => {
    const navigate = useNavigate();

    const initialData = {
        name: 'Helping Hands',
        location: 'Wilmington, Delaware',
        sector: 'Homelessness',
        missionGoal: 'To provide shelter and advocacy for the homeless'
    };

    const [isEditing, setIsEditing] = useState(false);
    const [formValues, setFormValues] = useState(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Handle save logic here, e.g., sending the updated values to the backend
        console.log('Updated Profile:', formValues);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
            {/* Navigation bar */}
            <div className="w-full bg-blue-500 p-4 flex justify-between items-center fixed top-0 z-10">
                <div className="flex items-center">
                    <img src={SpurImpactLogo} alt="Spur Impact Logo" className="h-10 mr-2" />
                    <h1 className="text-white text-2xl font-bold">De-Impact</h1>
                </div>
                <div className="space-x-4">
                    <button
                        className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => navigate('/WelcomePage')}
                    >
                        Welcome Page
                    </button>
                    <button
                        className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => navigate('/searchProfiles')}
                    >
                        Search Profiles
                    </button>
                </div>
            </div>
            <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-3/4 md:w-1/2 mt-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-6">NGO Profile Information</h1>
                    {isEditing ? (
                        <form className="space-y-4 w-full">
                            <div>
                                <label className="block text-lg font-semibold">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Location:</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formValues.location}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Sector:</label>
                                <input
                                    type="text"
                                    name="sector"
                                    value={formValues.sector}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Mission/Goal:</label>
                                <textarea
                                    name="missionGoal"
                                    value={formValues.missionGoal}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded"
                                    rows={3}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleSave}
                                className="mt-4 px-6 py-2 bg-green-500 text-white rounded"
                            >
                                Save
                            </button>
                        </form>
                    ) : (
                        <>
                            <p className="text-lg mb-2"><strong>Name:</strong> {formValues.name}</p>
                            <p className="text-lg mb-2"><strong>Location:</strong> {formValues.location}</p>
                            <p className="text-lg mb-2"><strong>Sector:</strong> {formValues.sector}</p>
                            <p className="text-lg mb-2"><strong>Mission/Goal:</strong> {formValues.missionGoal}</p>
                            <div className="mt-4 flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => navigate('/NGOApplication')}
                                    className="px-6 py-2 bg-blue-500 text-white rounded"
                                >
                                    NGO Applications
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleEdit}
                                    className="px-6 py-2 bg-blue-500 text-white rounded"
                                >
                                    Edit Profile
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/OpenPositionsPage')}
                                    className="px-6 py-2 bg-blue-500 text-white rounded"
                                >
                                    Open Positions
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NGOProfilePage;