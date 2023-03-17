import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarCart = ( producto ) => {
        const prodId =cartList.findIndex(product => product.id === producto.id)
        if(prodId!==-1){
            cartList[prodId].cantidad += producto.cantidad
            setCartList([...cartList])
            return
        }
        setCartList( [
            ...cartList,
            producto
        ])
    }


    const precioTotal =() => cartList.reduce( (count,producto) => count += producto.cantidad*producto.precio, 0)

    const cantidadTotal =() => cartList.reduce( ( count,producto) => count += producto.cantidad, 0)

    const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const vaciarCarrito = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            cantidadTotal,
            eliminarProducto,
            agregarCart,
            vaciarCarrito,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext