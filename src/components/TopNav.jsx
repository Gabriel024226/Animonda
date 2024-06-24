import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Index.css';
import '../Styles/Porfile.css';
import { AccountCircle } from '@mui/icons-material';
export const TopNav = ({isMenuOpen, setIsMenuOpen, toggleLoginPopup, toggleSignupPopup }) => {
  return (
    <nav>
      <NavLink to='/' className="Page">Home</NavLink>
      <NavLink to='/Catalogo' className="Page">Catalogo</NavLink>
      <NavLink to='/Carrito' className="Page">Mi Carro</NavLink>
      <div className='indicator'></div>
      <div id="divaa3">
        <input id="btnc1" type="button" value="LogIn"  onClick={toggleLoginPopup}></input>
        <input id="btnc2" type="button" value="SignUp"  onClick={toggleSignupPopup}></input>
        <AccountCircle className='pfp'></AccountCircle>
        <div id="divaaa3"></div>
        <div id="divaaa4"></div>
      </div>
    </nav>
  );
};
