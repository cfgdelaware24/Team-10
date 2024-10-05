import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpurImpactLogo from './SpurImpactLogo.png'; // Adjust the path for image logo


const ProfProfilePage: React.FC = () => {
    const navigate = useNavigate();

    // Updated hardcoded sample data
    const initialData = {
        name: 'John Doe',
        location: 'Wilmington, Delaware',
        skills: 'Communication, Law Degree, Advocacy, Litigation',
        sector: 'Homelessness',
        profileImage: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };

    const [isEditing, setIsEditing] = useState(false);
    const [formValues, setFormValues] = useState({
        name: initialData.name,
        location: initialData.location,
        skills: initialData.skills,
        sector: initialData.sector,
    });

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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Navigation bar */}
            <div className="w-full bg-blue-500 p-4 flex justify-between items-center fixed top-0">
                <div className="flex items-center">
                    {/* Add logo image next to the title */}
                    <img src={SpurImpactLogo} alt="Spur Impact Logo" className="h-10 mr-2" />
                    <h1 className="text-white text-2xl font-bold">De-Impact</h1>
                </div>

                {/* Navigation buttons */}
                <div className="space-x-4">
                    {/* button to navigate to welcome page */}
                        <button
                        className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => navigate('/WelcomePage')}
                    >
                        Welcome Page
                    </button>

                    {/* button to navigate to edit profile for NGO */}
                    <button
                        className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => navigate('/ProfApplications')}
                    >
                        Edit Profile
                    </button>




                </div>
            </div>
            <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-3/4 md:w-1/2">
                <div className="flex flex-col items-center">
                    {/* Hardcoded Profile Image */}
                    <img src={initialData.profileImage} alt="Profile Logo" className="w-32 h-32 mb-4" />
                    <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
                    {isEditing ? (
                        <form className="space-y-4">
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
                                <label className="block text-lg font-semibold">Skills:</label>
                                <textarea
                                    name="skills"
                                    value={formValues.skills}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded"
                                    rows={3}
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
                            <p className="text-lg mb-2"><strong>Skills:</strong> {formValues.skills}</p>
                            <p className="text-lg mb-2"><strong>Sector:</strong> {formValues.sector}</p>
                            <div className="mt-4 flex space-x-4">
                            <button
                                type="button"
                                onClick={() => navigate('/applications')}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                            >
                                My Applications
                            </button>
                            <button
                                type="button"
                                onClick={toggleEdit}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                            >
                                Edit Profile
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/FindNGOs')}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                            >
                                Find NGOs
                            </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfProfilePage;
