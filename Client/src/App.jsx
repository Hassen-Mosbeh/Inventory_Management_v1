import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
//import Login from './pages/Login';  
import SideBar from './SideBar/SideBar'

function App() {
  return (
<div>
  <SideBar />
</div>
=======
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
>>>>>>> 0ff35f15e1723f871f4af958e9c4de5a51f49dde
  );
}

export default App;
