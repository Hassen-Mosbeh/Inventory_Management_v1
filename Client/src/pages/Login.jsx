import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000//Api/v1/login', {
        email,
        password,
      }, { withCredentials: true });

      if (response.data.message === 'Login successful') {
        navigate('/sidebar');  
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again later.');
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }    
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin} className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            id="txt"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            id="txt"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        <button className="submit" type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
