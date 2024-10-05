import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface Position {
    name: string;
    description: string;
    skills: string;
}

const OpenPositionsPage: React.FC = () => {
    const navigate = useNavigate();
    const [positions, setPositions] = useState<Position[]>([]);
    const [newPosition, setNewPosition] = useState<Position>({
        name: '',
        description: '',
        skills: '',
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const manageFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewPosition((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddPosition = (e: React.FormEvent) => {
        e.preventDefault();
        setPositions([...positions, newPosition]);
        setNewPosition({ name: '', description: '', skills: '' }); // Reset form
    };

    // Handle form submission
    const viewApplication = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to applications page for position
        navigate('/NGOApplication');
    };
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6">Open Positions</h1>

            {/* Positions list */}
            <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-6">
                {positions.length > 0 ? (
                    <ul>
                        {positions.map((position, index) => (
                            <li key={index} className="mb-4">
                                <h2 className="text-lg font-semibold">Name: {position.name}</h2>
                                <p>Description: {position.description}</p>
                                <p className="text-sm text-gray-600">Skills: {position.skills}</p>
                            </li>
                        ))}
                        {/* Button to view applications for that position */}
                        <button type="submit" onClick = {viewApplication} className="bg-green-500 text-white px-6 py-2 rounded shadow-lg">
                    View Applications
                </button>
                    </ul>
                ) : (
                    <p>No positions available.</p>
                )}
            </div>

            {/* Add Position Button */}
            <div className="fixed bottom-4 right-4">
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded shadow-lg"
                    onClick={manageFormVisibility}
                    >
                    {isFormVisible ? "Close form" : "Add position" }
                    
                
                </button>
            </div>

            {/* Add Position Form */}
            {isFormVisible && (
            <form
                id="add-position-form"
                className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-8"
                onSubmit={handleAddPosition}
            >
                <h2 className="text-xl font-bold mb-4">Add New Position</h2>
                <div className="mb-4">
                    {/* Add Position Name Field */}
                    <label className="block text-gray-700 font-semibold mb-2">Position Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newPosition.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    {/* Add Position Description Field */}
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={newPosition.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    {/* Add Position Skills Field */}
                    <label className="block text-gray-700 font-semibold mb-2">Skills Required</label>
                    <input
                        type="text"
                        name="skills"
                        value={newPosition.skills}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                {/* Add Position Submit Button */}
                <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded shadow-lg">
                    Submit Position
                </button>
            </form>)}
        </div>
    );
};

export default OpenPositionsPage;
