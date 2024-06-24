import { useReducer, useEffect } from 'react'
import { CarritoContext } from './CarritoContext'
import axios from 'axios';

const initialState = []

export const CarritoProvider = ({ children }) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Cargar Carrito':
                return action.payload
            case '[CARRITO] Aumentar Cantidad Compra': 
                return state.map(compra => 
                    compra.id === action.payload.id ? { ...compra, cantidad: compra.cantidad + 1 } : compra
                );
            case '[CARRITO] Disminuir Cantidad Compra': 
                return state.map(compra => 
                    compra.id === action.payload.id ? { ...compra, cantidad: compra.cantidad - 1 } : compra
                );
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const fetchCarrito = async () => {
        try {
            const response = await axios.get('http://localhost:8080/carritos/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch({ type: '[CARRITO] Cargar Carrito', payload: response.data.items });
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    useEffect(() => {
        fetchCarrito();
    }, []);

    const agregarCompra = async (compra) => {
        try {
            const response = await axios.post('http://localhost:8080/carritos/addProduct', {
                userId: localStorage.getItem('userId'), 
                productId: compra.id_producto,
                quantity: 1
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch({ type: '[CARRITO] Cargar Carrito', payload: response.data.items });
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }

    const aumentarCantidad = async (id) => {
        // Implementar la lógica para aumentar la cantidad en el backend si es necesario
    }

    const disminuirCantidad = async (id) => {
        // Implementar la lógica para disminuir la cantidad en el backend si es necesario
    }

    const eliminarCompra = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/carritos/removeProduct/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch({ type: '[CARRITO] Eliminar Compra', payload: id });
        } catch (error) {
            console.error('Error removing product from cart:', error);
        }
    }

    return (
        <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
