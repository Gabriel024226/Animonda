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
import { ProductosProvider } from "../context/ProductosProvider"
import { CarritoProvider } from '../context/CarritoProvider';

export const Index = () => {
  const [selectedOption, setSelectedOption] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleOptionClick = (option) => setSelectedOption(option);
  const toggleLoginPopup = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignupPopup = () => setIsSignupOpen(!isSignupOpen);

  // let renderComponent;
  // switch (selectedOption) {
  //   case 'Home':
  //     renderComponent = <Home />;
  //     break;
  //   case 'Ofertas':
  //     renderComponent = <Ofertas />;
  //     break;
  //   case 'Colecciones':
  //     renderComponent = <Colecciones />;
  //     break;
  //   case 'Cart':
  //     renderComponent = <Cart />;
  //     break;
  //   default:
  //     renderComponent = <Home />;
  //     break;
  // }

  return (
    <ProductosProvider>
      <CarritoProvider>
      <TopNav
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleLoginPopup={toggleLoginPopup}
        toggleSignupPopup={toggleSignupPopup}
      />
      <div className="contenido">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Ofertas' element={<Ofertas />}></Route>
          <Route path='/Catalogo' element={<Colecciones />}></Route>
          <Route path='/Carrito' element={<Cart />}></Route>
          <Route path='/*' element={<Home />}></Route>
        </Routes>
      </div>
      {isLoginOpen && <LoginPopup togglePopup={toggleLoginPopup} />}
      {isSignupOpen && <SignupPopup togglePopup={toggleSignupPopup} />}
    </CarritoProvider>
    </ProductosProvider>
  );
};
