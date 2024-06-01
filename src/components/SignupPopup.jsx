import React from 'react';

export const SignupPopup = ({ togglePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Crear Cuenta</h2>
        <form className='Form'>
          <label>
            Usuario:
            <input type="text" name="username" />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button>Registrarse</button>
        </form>
        <button onClick={togglePopup}>Permanecer como invitado</button>
      </div>
    </div>
  );
};