import React from 'react';
import { useContext } from 'react';
import {CarritoContext} from "../context/CarritoContext"
import '../Styles/card.css'
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material"

export const Cart = () => {
  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} =
  useContext(CarritoContext)
  return (
    <>
      <table className="table">
        <thead class="table-dark">
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
              <tr key={item.id_producto}>
            <th scope="row">{item.nombre}</th>
            <td>{item.precio}</td>
            <td><button type="button" className="btn btn-danger"
                onClick={()=>eliminarCompra(item.id)}>
                  <RemoveShoppingCart />
                </button>
              </td>
          </tr>
            ))
          }
        </tbody>
      </table>
      <div className='d-grid gap-2'>
        <button className="btn btn-primary" >
          COMPRAR
        </button>
      </div>
    
    
    </>
  )
};
