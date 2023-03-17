import '../ItemListContainer/ItemListContainer'
import Item from "../Item/Item"
import { memo } from 'react'

 export const ItemList = memo( ({Productos}) => {
  return (
    <div className='itemList'>
        {Productos.map(Producto => <Item key={Producto.id} Producto= {Producto}/>)}
    </div>
  )
})

export default ItemList