import { ProductosContext} from "./ProductosContext";
import { useEffect, useState } from 'react';
export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
  // const [searchKeyword, setSearchKeyword] = useState("");

  
  // useEffect(() => {
  //   fetchProductos();
  // }, [searchKeyWord]);

  const fetchProductos = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    setProductos(data)
}
useEffect(() => {
    fetchProductos();
  }, [])

  // const fetchProductos = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/inventario/search`, {
  //       params: { keyword: searchKeyword }
  //     });
  //     setProductos(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };
    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}