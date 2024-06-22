import React, { useContext } from 'react';
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from '../context/CarritoContext';

export const Colecciones = () => {
  const { productos } = useContext(ProductosContext);
  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} =
  useContext(CarritoContext)


  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }
  const handleAumentar = (id) => {

  }
  const handleDisminuir = (id) => {

  }

  return (
    <main className='carrito'>
      {productos.map(producto => (
        <Card 
          key={producto.id_producto}
          imagen={producto.imagen}
          titulo={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        />
      ))}
    </main>
  );
};
