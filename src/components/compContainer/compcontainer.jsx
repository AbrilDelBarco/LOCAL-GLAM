


import { gFetcht } from "../utils/gfecht"
import React, {useState, useEffect} from "react"



export const Compcontainer =() =>{
    const [productos, setPorductos] =useState([])
    
    
    useEffect(() => {
        gFetcht()
            .then(resp => setPorductos(resp))
            .catch( err =>console.log(err))
    }, []) 


    return (
        <>
        {
        <div style={{
            display: 'flex',
    flexDirection:'row',
    flexWrap:'wrap',
        }}>
            
            {productos.map(producto=> ( 
                <div key={producto.id} className='card w-25 mt-4'>
                <div className='card-image'>
                    nombre: {producto.nombre
                    }
                    <img className='w-100'src={producto.img}/>
                </div>
                <div className='card-content'>
                    <p>{producto.desc}</p> 
                    <p> {producto.precio}</p>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-outline-dark w-100'>Detalle </button>
                </div>
            </div>))}
        </div>
        }
        
        </>
    )
}

export default Compcontainer