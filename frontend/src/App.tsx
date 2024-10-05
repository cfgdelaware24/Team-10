import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SignUpPage from './SignUpPage';
import NGOProfilePage from './NGOProfilePage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/*   {/* <Route path="/signup" element={<SignUpPage />} /> */} 
          <Route path="/NGOProfilePage" element={<NGOProfilePage />} />
          <Route path="/ProfessionalProfilePage" element={<NGOProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
