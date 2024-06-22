import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const TopNav = ({ selectedOption, handleOptionClick, toggleLoginPopup, toggleSignupPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('token');  // Elimina el token de almacenamiento local
    navigate('/');  // Navega al inicio o a la página de login
    setIsMenuOpen(false);  // Asegúrate de cerrar el menú también
  };

  // Función para manejar la apertura o cierre del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className='TopNav'>
      <NavLink to='/' className={selectedOption === 'Home' ? 'active' : ''} onClick={() => handleOptionClick('Home')}>Home</NavLink>
      <NavLink to='/Ofertas' className={selectedOption === 'Ofertas' ? 'active' : ''} onClick={() => handleOptionClick('Ofertas')}>Ofertas</NavLink>
      <NavLink to='/Catalogo' className={selectedOption === 'Colecciones' ? 'active' : ''} onClick={() => handleOptionClick('Colecciones')}>Catálogo</NavLink>
      <NavLink to='/Carrito' className={selectedOption === 'Cart' ? 'active' : ''} onClick={() => handleOptionClick('Cart')}>Mi Carro</NavLink>
      <div className="profile-container" onClick={toggleMenu}>
        <img className='Pfp' src='https://img.asmedia.epimg.net/resizer/v2/IB7NYOZ27VHJHM57J4J66FLD6A.jpeg?auth=1676abaa5ebb2eaa665a9fd9a13a9c7d96f9bbe75bc71d3496e5bd61cadc7e05&width=976' alt='Profile' />
        {isMenuOpen && (
          <div className='menu'>
            <a className='amenu' onClick={() => { toggleLoginPopup(); setIsMenuOpen(false); }}>Iniciar Sesión</a>
            <a className='amenu' onClick={() => { toggleSignupPopup(); setIsMenuOpen(false); }}>Crear Cuenta</a>
            <a className='amenu' onClick={handleLogout}>Cerrar Sesión</a>
          </div>
        )}
      </div>
    </div>
  );
};
