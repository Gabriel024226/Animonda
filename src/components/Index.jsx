import React, { useState } from 'react';
import '../Styles/Index.css';
import { TopNav } from './TopNav';
import { LoginPopup } from './FormularioLogin';
import { SignupPopup } from './SignupPopup';
import { Home } from './Home';
import { Ofertas } from './Ofertas';
import { Colecciones } from './Colecciones';
import { Cart } from './Cart';

export const Index = () => {
  const [selectedOption, setSelectedOption] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleOptionClick = (option) => setSelectedOption(option);
  const toggleLoginPopup = () => setIsLoginOpen(!isLoginOpen);
  const toggleSignupPopup = () => setIsSignupOpen(!isSignupOpen);

  let renderComponent;
  switch (selectedOption) {
    case 'Home':
      renderComponent = <Home />;
      break;
    case 'Ofertas':
      renderComponent = <Ofertas />;
      break;
    case 'Colecciones':
      renderComponent = <Colecciones />;
      break;
    case 'Cart':
      renderComponent = <Cart />;
      break;
    default:
      renderComponent = <Home />;
      break;
  }

  return (
    <>
      <TopNav
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleLoginPopup={toggleLoginPopup}
        toggleSignupPopup={toggleSignupPopup}
      />
      <div className="contenido">
        {renderComponent}
      </div>
      {isLoginOpen && <LoginPopup togglePopup={toggleLoginPopup} />}
      {isSignupOpen && <SignupPopup togglePopup={toggleSignupPopup} />}
    </>
  );
};
