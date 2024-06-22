import React, { useEffect, useState, useContext } from 'react';
import { ProductosContext } from './ProductosContext';
import axios from 'axios';
 
export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/inventario', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProductos(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []); // Depende de si necesitas re-fetch basado en alguna condición

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    );
};
