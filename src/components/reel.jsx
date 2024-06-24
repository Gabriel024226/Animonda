import { useContext, useRef, useEffect } from 'react';
import { ProductosContext } from "../context/ProductosContext";
import '../Styles/home.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export const Reel = () => {
  const imageContainerRef = useRef(null);
  const { productos } = useContext(ProductosContext);

  const prev = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft -= 250;
    }
  };

  const next = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft += 250;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageContainerRef.current) {
        imageContainerRef.current.scrollLeft += 250;
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
    <div className="page-container">
      <div className="content">
        <div className="prev" onClick={prev}>
          <ArrowBackIos fontSize="large" />
        </div>
        <div className="slide-panel" ref={imageContainerRef}>
          {productos.map((producto, index) => (
            <img className="homeimg" src={producto.imagen} alt={`Producto ${index}`} key={index} />
          ))}
        </div>
        <div className="next" onClick={next}>
          <ArrowForwardIos fontSize="large" />
        </div>
      </div>
    </div></>
);
};