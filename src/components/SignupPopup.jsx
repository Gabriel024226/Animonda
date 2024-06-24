import React from 'react';
import '../Styles/Form.css'

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
    <div class="login-container">
        <div class="circle blue"></div>
        <div class="circle orange"></div>
        <div class="login-box">
            <h2>Registrarse</h2>
            <form>
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username"></input>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"></input>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"></input>
                </div>
                <button type="submit" onClick={togglePopup}>Registrarse</button>
                <button type="submit" onClick={togglePopup}>Volver</button>
            </form>
        </div>
    </div>
  );
};
