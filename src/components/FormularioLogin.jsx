import React from 'react';
import '../Styles/Form.css'

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
    <div class="login-container">
        <div class="circle blue"></div>
        <div class="circle orange"></div>
        <div class="login-box">
            <h2>Iniciar Sesión</h2>
            <form>
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Email or Phone"></input>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"></input>
                </div>
                <button type="submit" onClick={togglePopup}>Iniciar Sesión</button>
                <button type="submit" onClick={togglePopup}>Volver</button>
            </form>
        </div>
    </div>
  );
};
