import '../ItemListContainer/ItemListContainer'
import Item from "../Item/Item"

 export const ItemList = ({Productos}) => {
  return (
    <div className='itemList'>
        {Productos.map(Producto => <Item key={Producto.id} Producto= {Producto}/>)}
    </div>
  )
}

export default ItemList