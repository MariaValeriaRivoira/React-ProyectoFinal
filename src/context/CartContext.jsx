import { useState, createContext, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext) 


export const CartContextProvider = ({ children }) => {
    const [ cartList, setCartList ] = useState([])
   

    
    const agregarCarrito = (producto) => {
        setCartList( [
            ...cartList,
            producto
        ] )
        
    }

   

    const vaciarCarrito = () => setCartList([])

  

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

