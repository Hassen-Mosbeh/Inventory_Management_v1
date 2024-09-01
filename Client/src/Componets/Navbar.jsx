import '../Componets/Navbar.css'
import { Link } from 'react-router-dom';
import sidebarIcon from '../assets/sidebarIcon.png';
const Navbar =() => {
return (
    <nav className="navbar">
    <div className="nav-container">
     
      <ul className="nav-links">
        <li>
          <Link to="/sidebar"> <img src={sidebarIcon} alt="Sidebar" className="nav-icon" /></Link>
        </li>
         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
       
      </ul>
    </div>
  </nav>
);
}
export default Navbar;