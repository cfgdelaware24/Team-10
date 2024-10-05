import React from 'react';

const ApplicationsPage: React.FC = () => {
  // Sample data for applications submitted by the user
  const applications = [
    {
      ngoName: 'Save the Children',
      appSubmitted: '2024-09-15',
      status: 'Pending',
      description: 'Field Research Assistant in Rwanda',
    },
    {
      ngoName: 'UNICEF',
      appSubmitted: '2024-09-20',
      status: 'Accepted',
      description: 'Web Developer for Online Learning Platform',
    },
    {
      ngoName: 'Doctors Without Borders',
      appSubmitted: '2024-09-18',
      status: 'Reviewing',
      description: 'Logistics Coordinator for Crisis Areas',
    },
    {
      ngoName: 'World Wildlife Fund',
      appSubmitted: '2024-09-25',
      status: 'Pending',
      description: 'Wildlife Protection Program Coordinator',
    },
  ];

  // Sample data for NGO requests
  const ngoRequests = [
    {
      ngoName: 'Red Cross',
      description: 'Disaster Relief Volunteer',
      appSubmitted: false,
    },
    {
      ngoName: 'Green Earth',
      description: 'Environmental Project Coordinator',
      appSubmitted: true,
    },
    {
      ngoName: 'Habitat for Humanity',
      description: 'Construction Volunteer for Affordable Housing',
      appSubmitted: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Applications</h1>

      {/* Section for User's Applications */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <h2 className="bg-gray-200 text-xl font-semibold px-4 py-2">Submitted Applications</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Name of NGO</th>
                <th className="px-4 py-2 text-left">App Submitted</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Description of Position</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {applications.map((app, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{app.ngoName}</td>
                  <td className="px-4 py-2">{app.appSubmitted}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-white ${
                        app.status === 'Pending' ? 'bg-yellow-500' :
                        app.status === 'Accepted' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{app.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section for NGO Requests */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="bg-gray-200 text-xl font-semibold px-4 py-2">NGO Requests</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Name of NGO</th>
                <th className="px-4 py-2 text-left">Description of Position</th>
                <th className="px-4 py-2 text-left">Application Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {ngoRequests.map((request, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{request.ngoName}</td>
                  <td className="px-4 py-2">{request.description}</td>
                  <td className="px-4 py-2">
                    {request.appSubmitted ? (
                      <span className="inline-block px-2 py-1 rounded bg-green-500 text-white">
                        Submitted
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 rounded bg-red-500 text-white">
                        Not Yet
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
