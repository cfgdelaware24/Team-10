import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfCreateProfilePage: React.FC = () => {
    const navigate = useNavigate();
    
    // State to store form input values
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        sector: '',
        location: '',
        skills: '',
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Navigate to the profile page and pass the form values
        navigate('/profile', { state: formValues });
    };
    
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gray-100"
        >
            <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-3/4 md:w-1/2">
                <h1 className="text-2xl font-bold mb-6 text-center">Professional Profile</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-semibold">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-semibold">Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Enter your email"
                            required
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
                            placeholder="Enter the sector you're interested in"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-semibold"> Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formValues.location}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Enter your preferred location"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-semibold">Skills:</label>
                        <textarea
                            name="skills"
                            value={formValues.skills}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="List your skills here"
                            rows={3}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfCreateProfilePage;
