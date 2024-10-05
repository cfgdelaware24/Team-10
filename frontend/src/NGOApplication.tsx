import { useParams } from 'react-router-dom';

const ApplicantsPage = () => {
    const { positionId } = useParams();

    // Hardcoded mock data for applicants
    const applicantsData = {
        '1': [
            { id: 'a1', name: 'Alice Johnson', skills: 'Communication' },
            { id: 'a2', name: 'Bob Smith', skills: 'Law' },
        ],
        '2': [
            { id: 'a3', name: 'Charlie Brown', skills: 'Python, Django' },
            { id: 'a4', name: 'Dana White', skills: 'Java, Spring' },
        ],
    };

    const applicants = applicantsData[1]

    return (
        <div>
            <h1>Applicants for Position ID: {positionId}</h1>
            {applicants.length > 0 ? (
                <ul>
                    {applicants.map(applicant => (
                        <li key={applicant.id}>
                            <h2>
                                {applicant.name} 
                                {applicant.skills.includes('React') ? (
                                    <span style={{ color: 'green' }}> ✓</span>
                                ) : (
                                    <span style={{ color: 'red' }}> ✗</span>
                                )}
                            </h2>
                            <p>Skills: {applicant.skills}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No applicants found for this position.</p>
            )}
        </div>
    );
};

export default ApplicantsPage;