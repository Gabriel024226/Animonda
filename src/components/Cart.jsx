import React, { useContext } from 'react';
import { CarritoContext } from "../context/CarritoContext";
import '../Styles/card.css';
import { RemoveShoppingCart } from "@mui/icons-material";

export const Cart = () => {
  const calcularTotal = () =>{
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad,0).toFixed(2)
  }
  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} =
  useContext(CarritoContext)
  return (
    <>
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
            <th scope="row">{item.title}</th>
            <td>{item.price}</td>
            <td>
              <button className="btn btn-ouline-primary"
              onClick={() => disminuirCantidad(item.id)}>-</button>
              <button className="btn btn-primary">{item.cantidad}</button>
              <button className="btn btn-ouline-primary"
              onClick={() => aumentarCantidad(item.id)}>+</button>
              
            </td>
            <td><button type="button" className="btn btn-danger"
                onClick={()=>eliminarCompra(item.id)}>
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
      <div className='d-grid gap-2'>
        <button className="btn btn-primary">
          COMPRAR
        </button>
      </div>
    </>
  );
};
