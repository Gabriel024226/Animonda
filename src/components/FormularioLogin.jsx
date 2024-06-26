import React, { useState } from 'react';
import '../Styles/Form.css'
import axios from 'axios';
import '../axiosConfig';  // Asegúrate de que la ruta sea correcta


export const LoginPopup = ({ togglePopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password
      });
      console.log('Login successful', response.data);
      localStorage.setItem('token', response.data.token);
      togglePopup(); // Cerrar el popup tras un inicio de sesión exitoso
      setLoading(false);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : 'Unknown Error');
      setError('Error de autenticación. Verifica tu usuario y contraseña.');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="circle blue"></div>
      <div className="circle orange"></div>
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email or Phone" disabled={loading}></input>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" disabled={loading}></input>
          </div>
          <button type="submit" disabled={loading}>Iniciar Sesión</button>
          <button type="button" onClick={togglePopup}>Volver</button>
        </form>
      </div>
    </div>
  );
};