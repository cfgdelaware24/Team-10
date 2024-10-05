import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage'; 
import RegistrationPageNGO from './pages/RegistrationPageNGO';
import RegistrationPageProfessional from './pages/RegistrationPageProfessional'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register-ngo" element={<RegistrationPageNGO />} />
        <Route path="/register-professional" element={<RegistrationPageProfessional />} />

        <Route path="/" element={<SignInPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
