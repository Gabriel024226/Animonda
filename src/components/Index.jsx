import React, { useState } from 'react';
import '../Styles/Background.css';
import { TopNav } from './TopNav';
import { LoginPopup } from './FormularioLogin';
import { SignupPopup } from './SignupPopup';
import { Home } from './Home';
import { Colecciones } from './Colecciones';
import { Cart } from './Cart';
import { Route, Routes } from 'react-router-dom';
import { ProductosProvider } from "../context/ProductosProvider";
import { CarritoProvider } from '../context/CarritoProvider';

import '../axiosConfig';  // Asegúrate de que esta configuración se ejecuta para configurar Axios globalmente

export const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleLoginPopup = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignupPopup = () => setIsSignupOpen(!isSignupOpen);
  

  return (
    <ProductosProvider>
      <CarritoProvider>
      <TopNav
        toggleLoginPopup={toggleLoginPopup}
        toggleSignupPopup={toggleSignupPopup}
      />
      <div className="context">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Catalogo' element={<Colecciones />}></Route>
          <Route path='/Carrito' element={<Cart />}></Route>
          <Route path='/*' element={<Home />}></Route>
        </Routes>
      </div>
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <img className="imgfondo1" src='src/Assets/pain.gif' alt="pain"></img>
            <img className="imgfondo2" src='src/Assets/luffy.gif' alt="luffy"></img>
      </div >
      {isLoginOpen && <LoginPopup togglePopup={toggleLoginPopup} />}
      {isSignupOpen && <SignupPopup togglePopup={toggleSignupPopup} />}
    </CarritoProvider>
    </ProductosProvider>
  );
};
