import React, { useEffect, useState, useContext } from 'react';
import { ProductosContext } from './ProductosContext';
import axios from 'axios';
 
export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/inventario/search', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                params: { keyword: searchKeyword }
            });
            setProductos(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, [searchKeyword]); // React hará el fetch cada vez que searchKeyword cambie


    return (
        <ProductosContext.Provider value={{ productos, setSearchKeyword }}>
            {children}
        </ProductosContext.Provider>
    );
};
