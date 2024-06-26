import React, { useContext } from 'react';
import { CarritoContext } from "../context/CarritoContext";
import '../Styles/card.css';
import { RemoveShoppingCart } from "@mui/icons-material";

export const Cart = () => {
  
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.product.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <>
    {listaCompras.length > 0 ? (
      <table className="table">
        <thead className="table-dark">
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras.map(item => (
              <tr key={item.id}>
            <th scope="row">{item.product.nombre}</th>
            <td>{item.product.precio}</td>
            <td>
              <button className="btn"
              onClick={() => disminuirCantidad(item.product.id_producto)}>-</button>
              <button className="quantity">{item.quantity}</button>
              <button className="btn"
              onClick={() => aumentarCantidad(item.product.id_producto)}>+</button>
              
            </td>

           
            <td><button type="button" className="boton-quitar"
                onClick={()=>eliminarCompra(item.product.id_producto)}>
                  <RemoveShoppingCart />
                </button>
              </td>
          </tr>
            ))
          }
          <th><b>TOTAL:</b></th>
          <th> </th>
          <th>${calcularTotal()}</th>
          <th> </th>
        </tbody>
      </table>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
      <div className='d-grid gap-2'>
        <button className="comprar" disabled={listaCompras.length === 0}>
          COMPRAR
        </button>
      </div>
    </>
  );
};
