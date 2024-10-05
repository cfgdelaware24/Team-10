import React from 'react';

const ApplicationsPage: React.FC = () => {
  // Sample data for applications
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Applications</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
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
    </div>
  );
};

export default ApplicationsPage;
