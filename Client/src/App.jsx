import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './SideBar/SideBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './Componets/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/sidebar'); // Navigate to the sidebar page after login
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Home page as default */}
          <Route path="/" element={<Home />} />

          {/* Login and Signup pages */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Conditionally render Sidebar after login */}
          {isLoggedIn && <Route path="/sidebar" element={<SideBar />} />}
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
