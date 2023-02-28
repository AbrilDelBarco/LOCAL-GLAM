import {useCartContext} from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({Product}) => {
    const {agregarCart} = useCartContext ()
    function onAdd(cantidad){
            agregarCart( {...Product, cantidad})
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
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail