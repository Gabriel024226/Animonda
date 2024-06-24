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
              <button className="btn btn-ouline-primary"
              onClick={() => disminuirCantidad(item.product.id_producto)}>-</button>
              <button className="btn btn-primary">{item.quantity}</button>
              <button className="btn btn-ouline-primary"
              onClick={() => aumentarCantidad(item.product.id_producto)}>+</button>
              
            </td>

           
            <td><button type="button" className="btn btn-danger"
                onClick={()=>eliminarCompra(item.product.id_producto)}>
                  <RemoveShoppingCart />
                </button>
              </td>
          </tr>
            ))
          }
          <th><b>TOTAL:</b></th>
          <td> </td>
          <td>${calcularTotal()}</td>
          <td> </td>
        </tbody>
      </table>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
      <div className='d-grid gap-2'>
        <button className="btn btn-primary" disabled={listaCompras.length === 0}>
          COMPRAR
        </button>
      </div>
    </>
  );
};
