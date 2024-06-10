import { useState } from "react"
import '../Styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio}) => {


    

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>

            </div>
        </div>
    )
}