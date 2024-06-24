import React, { useState } from 'react';
import axios from 'axios';
// En App.js o en cualquier otro componente donde hagas llamadas HTTP
import '../axiosConfig';  // Asegúrate de que la ruta sea correcta
import '../Styles/Form.css'

export const SignupPopup = ({ togglePopup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');  // Estado para manejar los mensajes de error

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
      togglePopup(); // Cerrar el popup solo después de un registro exitoso
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : 'Unknown Error');
      setError(error.response ? error.response.data.message : 'Ocurrió un error al registrar');
    }
  };


  return (
    <div className="login-container">
        <div className="circle blue"></div>
        <div className="circle orange"></div>
        <div className="login-box">
            <h2>Registrarse</h2>
            {error && <p className="error">{error}</p>}
            <form className='Form' onSubmit={handleSignup}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Correo' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Registrarse</button>
                <button type="button" onClick={togglePopup}>Volver</button>
            </form>
        </div>
    </div>
  );
};
