import React, { useState } from 'react';
import '../Styles/Index.css';
import { TopNav } from './TopNav';
import { LoginPopup } from './FormularioLogin';
import { SignupPopup } from './SignupPopup';
import { Home } from './Home';
import { Ofertas } from './Ofertas';
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
        <div className="contenido">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Ofertas' element={<Ofertas />} />
            <Route path='/Catalogo' element={<Colecciones />} />
            <Route path='/Carrito' element={<Cart />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </div>
        {isLoginOpen && <LoginPopup togglePopup={toggleLoginPopup} />}
        {isSignupOpen && <SignupPopup togglePopup={toggleSignupPopup} />}
      </CarritoProvider>
    </ProductosProvider>
  );
};
