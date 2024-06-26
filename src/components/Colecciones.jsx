import React, { useContext } from 'react';
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from '../context/CarritoContext';
import '../Styles/card.css';

export const Colecciones = () => {
  const { productos, setSearchKeyword } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  
 

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  }
  
  const handleQuitar = (id) => {
    eliminarCompra(id);
  }

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <input
        
        type="text"
        placeholder="Buscar productos"
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className='carrito'>
      {productos.map(producto => (
        <Card 
          key={producto.id_producto}
          imagen={producto.imagen}
          titulo={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id_producto)}
        />
      ))}
    
      </div>
    </>
  );
};