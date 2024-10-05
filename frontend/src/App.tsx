import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SignUpPage from './SignUpPage';
import NGOProfilePage from './NGOProfilePage';

import './App.css';
import ProfessionalProfilePage from './ProfessionalProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/*   {/* <Route path="/signup" element={<SignUpPage />} /> */} 
          <Route path="/NGOProfilePage" element={<NGOProfilePage />} />
          <Route path="/ProfessionalProfilePage" element={<ProfessionalProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
