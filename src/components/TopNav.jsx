import React from 'react';
import { NavLink } from 'react-router-dom';
export const TopNav = ({ selectedOption, handleOptionClick, isMenuOpen, setIsMenuOpen, toggleLoginPopup, toggleSignupPopup }) => {
  return (
    <div className='TopNav'>
      <NavLink to='/' className={selectedOption === 'Home' ? 'active' : ''} onClick={() => handleOptionClick('Home')}>Home</NavLink>
      <NavLink to='/Ofertas' className={selectedOption === 'Ofertas' ? 'active' : ''} onClick={() => handleOptionClick('Ofertas')}>Ofertas</NavLink>
      <NavLink to='/Catalogo' className={selectedOption === 'Colecciones' ? 'active' : ''} onClick={() => handleOptionClick('Colecciones')}>Catalogo</NavLink>
      <NavLink to='/Carrito' className={selectedOption === 'Cart' ? 'active' : ''} onClick={() => handleOptionClick('Cart')}>Mi Carro</NavLink>
      <a onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
        <img className='Pfp' src='https://img.asmedia.epimg.net/resizer/v2/IB7NYOZ27VHJHM57J4J66FLD6A.jpeg?auth=1676abaa5ebb2eaa665a9fd9a13a9c7d96f9bbe75bc71d3496e5bd61cadc7e05&width=976' alt='Pfp' />
        {isMenuOpen && (
          <div className='menu'>
            <a className='amenu' onClick={toggleLoginPopup}>Iniciar Sesion</a>
            <a className='amenu' onClick={toggleSignupPopup}>Crear Cuenta</a>
          </div>
        )}
      </a>
    </div>
  );
};
