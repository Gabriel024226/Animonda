import { useEffect, useState } from 'react';
import { Card } from "../components/Card";
import axios from 'axios';

export const Colecciones = () => {
  const [productos, setProductos] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetchProductos();
  }, [searchKeyword]);

  const fetchProductos = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/inventario/search`, {
        params: { keyword: searchKeyword }
      });
      setProductos(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchKeyword}
        onChange={handleSearchChange}
      />
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
