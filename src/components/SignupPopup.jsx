import React, { useState } from 'react';
import axios from 'axios';
// En App.js o en cualquier otro componente donde hagas llamadas HTTP
import '../axiosConfig';  // Asegúrate de que la ruta sea correcta


export const SignupPopup = ({ togglePopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        username,
        password,
        email
      });
      console.log('Registro exitoso', response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : 'Unknown Error');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Crear Cuenta</h2>
        <form className='Form' onSubmit={handleSignup}>
          <label>
            Usuario:
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button type="submit">Registrarse</button>
        </form>
        <button onClick={togglePopup}>Permanecer como invitado</button>
      </div>
    </div>
  );
};
