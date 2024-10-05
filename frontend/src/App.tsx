import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import OpenPositionsPage from './OpenPositionsPage';
import NGOProfilePage from './NGOProfilePage';
import ApplicationsPage from './ApplicationsPage';
import ProfCreateProfilePage from './ProfCreateProfilePage';
import ProfProfilePage from './ProfProfilePage';
import './App.css';

import RegistrationPageNGO from './pages/RegistrationPageNGO';
import RegistrationPageProfessional from './pages/RegistrationPageProfessional'; 
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signin" element={<SignUpPage />} />
        <Route path="/register-ngo" element={<RegistrationPageNGO />} />
        <Route path="/register-professional" element={<RegistrationPageProfessional />} />

        <Route path="/" element={<SignUpPage />} /> {/* Default route */}
        <Route path="/OpenPositionsPage" element={<OpenPositionsPage />} />
        <Route path="/NGOProfilePage" element={<NGOProfilePage/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ProfCreateProfilePage" element={<ProfCreateProfilePage />} />
        <Route path="/profile" element={<ProfProfilePage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
