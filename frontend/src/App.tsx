import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage'; 
import RegistrationPageNGO from './pages/RegistrationPageNGO';
import RegistrationPageProfessional from './pages/RegistrationPageProfessional'; 
import WelcomePage from './WelcomePage';
import SignUpPage from './SignUpPage';
import OpenPositionsPage from './OpenPositionsPage';
import NGOProfilePage from './NGOProfilePage';
import ApplicationsPage from './ApplicationsPage';
import ProfCreateProfilePage from './ProfCreateProfilePage';
import ProfProfilePage from './ProfProfilePage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register-ngo" element={<RegistrationPageNGO />} />
        <Route path="/register-professional" element={<RegistrationPageProfessional />} />

        <Route path="/" element={<SignInPage />} /> {/* Default route */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
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
