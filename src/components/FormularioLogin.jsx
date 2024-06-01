import React from 'react';

export const LoginPopup = ({ togglePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Iniciar Sesion</h2>
        <form className='Form'>
          <label>
            Usuario:
            <input type="text" name="username" />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" />
          </label>
          <button>Ingresar</button>
        </form>
        <button onClick={togglePopup}>Close Popup</button>
      </div>
    </div>
  );
};