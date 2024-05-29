import React, { useState } from 'react';
import './Styles/Index.css'
export const Index = () => {
  const [selectedOption, setSelectedOption] = useState('Home');//Estado para TopNav
  const handleOptionClick = (option) => { //Cambio de estado para TopNav
    setSelectedOption(option);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);//Estado para menu de inicioSesion
  
  const [is1Open, setIs1Open] = useState(false);//Estado para popup de inicio de sesion

  const togglePopup1 = () => {//Cambio de estado para popup de inicio de sesion

    setIs1Open(!is1Open);
  };
  const [is2Open, setIs2Open] = useState(false);//Estado para popup crear cuenta

  const togglePopup2 = () => {//Cambio de estado para popup crear cuenta
    setIs2Open(!is2Open);
  };
  return (
    <>
    <div class='TopNav'>
      {/* Opciones de ventanas */}
        <a className={selectedOption === 'Home' ? 'active' : ''} href="#" onClick={() => handleOptionClick('Home')}>Home</a>
        <a className={selectedOption === 'Ofertas' ? 'active' : ''} href="#" onClick={() => handleOptionClick('Ofertas')}>Ofertas</a>
        <a className={selectedOption === 'Colecciones' ? 'active' : ''} href="#" onClick={() => handleOptionClick('Colecciones')}>Colecciones</a>
        <a className={selectedOption === 'Cart' ? 'active' : ''} href="#" onClick={() => handleOptionClick('Cart')}>Mi Carro</a>
        {/* ImagenTriggerIniSesion */}
        <a onMouseEnter={() => setIsMenuOpen(true)}
         onMouseLeave={() => setIsMenuOpen(false)}><img class='Pfp' src='https://img.asmedia.epimg.net/resizer/v2/IB7NYOZ27VHJHM57J4J66FLD6A.jpeg?auth=1676abaa5ebb2eaa665a9fd9a13a9c7d96f9bbe75bc71d3496e5bd61cadc7e05&width=976' alt='Pfp'></img>
         {isMenuOpen && (
          // MenuIniSesion
          <div className='menu'>
            <a className='amenu' onClick={togglePopup1}>Iniciar Sesion</a>
            <a className='amenu' onClick={togglePopup2}>Crear Cuenta</a>
          </div>
        )}</a>
        {/* FormularioIniSesion */}
        {is1Open && (
            <div className="popup">
              <div className="popup-content">
              <h2>Iniciar Sesion</h2>
                  <form class='Form'>
                    <label>
                      Usuario:
                      <input
                        type="text"
                        name="username"
                      />
                    </label>
                    <label>
                      Contraseña:
                      <input
                        type="password"
                        name="password"
                      />
                    </label>
                    <button >Ingresar</button>
                  </form>
                <button onClick={togglePopup1}>Close Popup</button>
              </div>
            </div>
          )}
          {/* FormularioRegistro */}
        {is2Open && (
            <div className="popup">
              <div className="popup-content">
              <h2>Crear Cuenta</h2>
                  <form class='Form'>
                    <label>
                      Usuario:
                      <input
                        type="text"
                        name="username"
                      />
                    </label>
                    <label>
                      Contraseña:
                      <input
                        type="password"
                        name="password"
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                      />
                    </label>
                    <button >Registrarse</button>
                  </form>
                <button onClick={togglePopup2}>Permanecer como invitado</button>
              </div>
            </div>
          )}
        </div>
    </>    
  )
}
