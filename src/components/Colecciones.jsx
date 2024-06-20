import { useContext } from 'react';
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from '../context/CarritoContext';
import axios from 'axios';

export const Colecciones = () => {
  const { productos } = useContext( ProductosContext )
  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} =
  useContext(CarritoContext)
  // const [searchKeyword, setSearchKeyword] = useState("");


  

  // const handleSearchChange = (event) => {
  //   setSearchKeyword(event.target.value);
  // };
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
      {/* <input
        type="text"
        placeholder="Buscar productos"
        value={searchKeyword}
        onChange={handleSearchChange}
      /> */}
      
      {productos.map(producto => (
        // <Card 
        //   key={producto.id_producto}
        //   imagen={producto.imagen}
        //   titulo={producto.nombre}
        //   descripcion={producto.descripcion}
        //   precio={producto.precio}
        // />
        <Card 
        key={producto.id}
        imagen={producto.image}
        titulo={producto.title}
        descripcion={producto.description}
        precio={producto.price}
        handleAgregar={()=>handleAgregar(producto)}
        handleQuitar={()=>handleQuitar(producto.id)}
        />
      ))}
    </main>
  );
};
