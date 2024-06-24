import React, { useContext } from 'react';
import { CarritoContext } from "../context/CarritoContext";
import '../Styles/card.css';
import { RemoveShoppingCart } from "@mui/icons-material";

export const Cart = () => {
  const { listaCompras, eliminarCompra } = useContext(CarritoContext);

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
                <th scope="row">{item.product.nombre}</th>
                <td>{item.product.precio}</td>
                <td>{item.cantidad}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)}>
                    <RemoveShoppingCart />
                  </button>
                </td>
              </tr>
            ))
          }
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
