import { useEffect, useState } from 'react';
import { Card } from "../components/Card";
import axios from 'axios';

export const Colecciones = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/inventario");
      console.log(response.data);
      setProductos(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <>
      <h1>Compras: </h1>
      <hr />
      {productos.map(producto => (
        <Card 
          key={producto.id_producto}
          imagen={producto.imagen}
          titulo={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ))}
    </>
  );
};
