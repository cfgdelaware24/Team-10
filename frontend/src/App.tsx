import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import OpenPositionsPage from './OpenPositionsPage';
import NGOProfilePage from './NGOProfilePage';
import ApplicationsPage from './ApplicationsPage';
import ProfCreateProfilePage from './ProfCreateProfilePage';
import ProfProfilePage from './ProfProfilePage';
import EditNGOProfile from './EditNGOProfile';
import FindNGOs from './FindNGOs';
import ApplicantsPage from './NGOApplication';
import './App.css';
import SearchProfiles from './SearchProfiles';
import RegistrationPageNGO from './pages/RegistrationPageNGO';
import RegistrationPageProfessional from './pages/RegistrationPageProfessional'; 
import SignUpPage from './pages/SignUpPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ProfCreateProfilePage" element={<ProfCreateProfilePage />} />
        <Route path="/ProfProfilePage" element={<ProfProfilePage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        {/* <Route path="/editNGOProfile" element={<editNGOProfile />} /> */}
        <Route path="/NGOApplication" element={<ApplicantsPage/>} />
        <Route path="/FindNGOs" element={<FindNGOs />} />
        <Route path="/SearchProfiles" element={<SearchProfiles />} />
      </Routes>
    </Router>
  );
}

export default App;
