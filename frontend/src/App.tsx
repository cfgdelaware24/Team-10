import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SignUpPage from './SignUpPage';
import NGOProfilePage from './NGOProfilePage';

import './App.css';
import ProfCreateProfilePage from './ProfCreateProfilePage';
import ProfProfilePage from './ProfProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/*   {/* <Route path="/signup" element={<SignUpPage />} /> */} 
          <Route path="/NGOProfilePage" element={<NGOProfilePage />} />
          <Route path="/ProfCreateProfilePage" element={<ProfCreateProfilePage />} />
          <Route path="/profile" element={<ProfProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App;
