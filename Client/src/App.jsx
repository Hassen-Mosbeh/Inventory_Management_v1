import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';  
import SideBar from './SideBar/Sidebar';  
import Signup from './pages/Signup';
import Navbar from './Componets/Navbar';
function App() {
  return (
    <Router>
       <div className="app-container">
        <SideBar />  
        <div className="main-content">
          <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
