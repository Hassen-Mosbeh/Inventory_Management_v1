import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Api/v1/Signup', {
        email,
        password,
      }, { withCredentials: true });

      // Adjust success message check based on your API response
      if (response.data.message === 'Signup successful') {
        navigate('/sidebar');  // Navigate to the sidebar page
      } else {
        setError('Signup failed. Please check your details.');
      }
    } catch (error) {
      setError('An error occurred during signup. Please try again later.');
      console.error('Error signing up:', error.response ? error.response.data : error.message);
    }    
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Signup</div> {/* Changed to Signup */}
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSignup} className="inputs">
      <div className="input">
        <input id="name"   name="name"
            placeholder="UserName"type="name" />
        </div>
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
        <div className="input">
        <input id="txt"   name="Role"
            placeholder="Role"type="role" /> 
        </div>

        {error && <div className="error-message">{error}</div>}
        <button className="submit" type='submit'>Signup</button> {/* Changed text to Signup */}
      
      </form>
    </div>
  );
};

export default Signup;
