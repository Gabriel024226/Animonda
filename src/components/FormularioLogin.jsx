import React, { useState } from 'react';
import axios from 'axios';
// En App.js o en cualquier otro componente donde hagas llamadas HTTP
import '../axiosConfig';  // Asegúrate de que la ruta sea correcta


export const LoginPopup = ({ togglePopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password
      });
      console.log('Login successful', response.data);
      
      // Aquí podrías guardar el token en localStorage o manejarlo como consideres
      localStorage.setItem('token', response.data.token);
      
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : 'Unknown Error');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Iniciar Sesion</h2>
        <form className='Form' onSubmit={handleLogin}>
          <label>
            Usuario:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Ingresar</button>
        </form>
        <button onClick={togglePopup}>Close Popup</button>
      </div>
    </div>
  );
};
