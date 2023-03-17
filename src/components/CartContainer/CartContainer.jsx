
import { useCartContext } from "../../context/CartContext"
import CartList from "../CartList/CartLis"
import From from "../formulario/Formulario"




export const CartContainer = () => {
    const{ cartList } =useCartContext()
    return (
    <div>
        {

        cartList.map(prodCart =><CartList key={prodCart.id} prodCart={prodCart }/>)
                
            } 
            <From/>
    </div>
    
    )
}


export default CartContainer