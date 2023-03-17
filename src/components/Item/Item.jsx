import { memo } from "react"
import {Link} from "react-router-dom"
export const Item= memo( ({Producto}) => {
  return (
    <div key={Producto.id} className='card w-25 mt-4 shadow'>
    <div className='card-image'>
       {Producto.nombre}
        <img className='w-100'src={Producto.img}/>
    </div>
    <div className='card-content'>
        <p>{Producto.desc}</p> 
        <p> {Producto.precio}</p>
    </div>
    <div className='card-footer'>
        <Link to={`/detalle/${Producto.id}`} ><button className='btn btn-outline-dark w-100' >Detalle</button> </Link>
    </div>
    </div>
  )
})

export default Item