import {Link} from "react-router-dom"
export const Item= ({Producto}) => {
  return (
    <div style={{
        display: 'flex',
flexDirection:'row',
flexWrap:'wrap',
    }}>
    <div key={Producto.id} className='card w-25 mt-4'>
    <div className='card-image'>
        nombre: {Producto.nombre}
        <img className='w-100'src={Producto.img}/>
    </div>
    <div className='card-content'>
        <p>{Producto.desc}</p> 
        <p> {Producto.precio}</p>
    </div>
    <div className='card-footer'>
        <Link className='btn btn-outline-dark w-100' to={`/detalle/${Producto.id}`}>Detalle </Link>
    </div>
    </div>
    </div>
  )
}

export default Item