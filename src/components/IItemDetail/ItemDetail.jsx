import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({Product}) => {
    const {agregarCart} = useCartContext ()
    const [isCount, setIsCount ] = useState(true)
    function onAdd(cantidad){
            agregarCart( {...Product, cantidad})
           setIsCount(false)
    }
  return (
    <div>
        <div className='row'>
            <div className='col-6'>
                <img src={Product.img} alt="imagen" className='w-50'/>
            </div>
            <div>
                <p>Nombre: {Product.name}</p>
                <p>Categoria: {Product.categoria}</p>
                <p> precio: {Product.precio}</p>
            </div>
            <div className='col-6'>
            {isCount ?
                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    :
                        <>

                        <Link  to='/Cart'className='btn btn-dark'>Ir al carrito</Link>
                        <Link  to='/'className='btn btn-dark'>Segir Comprando</Link>
                        </>
                    }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail