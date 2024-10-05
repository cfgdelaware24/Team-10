import React, { useState } from 'react';

const dummyProfiles = [
    {
        name: 'Alice Smith',
        location: 'New York, NY',
        skills: ['Communication', 'Advocacy', 'Public Speaking'],
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Bob Johnson',
        location: 'San Francisco, CA',
        skills: ['Grant Writing', 'Project Management'],
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Carol Williams',
        location: 'Austin, TX',
        skills: ['Research', 'Law'],
        profileImage: 'https://images.unsplash.com/photo-1521252659862-eec69941b071?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90fGVufDB8fDB8fHww',
    },
];

const SearchProfiles: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<string>('');

    // Create a list of all available skills
    const allSkills = Array.from(
        new Set(dummyProfiles.flatMap(profile => profile.skills))
    );

    // Filter profiles based on the selected skill
    const filteredProfiles = selectedSkill
        ? dummyProfiles.filter(profile => profile.skills.includes(selectedSkill))
        : dummyProfiles;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
            <h1 className="text-2xl font-bold mb-6">Search Profiles</h1>

            {/* Skill Filter Dropdown */}
            <div className="mb-6">
                <label className="mr-2 font-semibold">Filter by skill:</label>
                <select
                    value={selectedSkill}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                    className="border rounded-md p-2"
                >
                    <option value="">All Skills</option>
                    {allSkills.map((skill, index) => (
                        <option key={index} value={skill}>
                            {skill}
                        </option>
                    ))}
                </select>
            </div>

            {/* Profile List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
                {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <img
                                src={profile.profileImage}
                                alt={`${profile.name}'s Profile`}
                                className="w-full h-42 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold">{profile.name}</h2>
                            <p className="text-gray-600">{profile.location}</p>
                            <div className="mt-2">
                                <strong>Skills:</strong>
                                <ul className="list-disc list-inside">
                                    {profile.skills.map((skill, idx) => (
                                        <li key={idx} className="text-gray-700">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No profiles found with the selected skill.</p>
                )}
            </div>
        </div>
    );
};

export default SearchProfiles;
