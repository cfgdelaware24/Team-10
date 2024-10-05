import React, { useState } from 'react';

const ProfProfilePage: React.FC = () => {
    // Hardcoded sample data
    const initialData = {
        name: 'John Doe',
        location: 'New York, USA',
        skills: 'React, JavaScript, CSS, HTML',
        sector: 'Software Development',
        profileImage: 'https://via.placeholder.com/150',
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
                            <button
                                type="button"
                                onClick={toggleEdit}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                            >
                                Edit
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfProfilePage;
