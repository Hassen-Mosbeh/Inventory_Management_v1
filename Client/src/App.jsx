import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';  
import SideBar from './SideBar/Sidebar';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </Router>
  );
}

export default App;
