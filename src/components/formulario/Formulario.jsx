


import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'




const From = ({from}) => {
const{cartList,precioTotal,vaciarCarrito } =useCartContext()
const[id, setId] = useState("")
const [datForm,setDatFrom] = useState({
    name:'',
    gmail:'',
    phone:'',
    validarGmail:'',
})

const generarOrden =(event) => {
event.preventDefault()
if (datForm.gmail !== datForm.validarGmail){
    throw new Error("Gmail incorrecto. Por favor, escríbalo nuevamente.")
}else{
    const orden ={}
    orden.comprador =datForm
    orden.precioTotal = precioTotal()
    orden.isActive  = true
    orden.Productos =cartList.map(({ name, precio, id}) => ({name, precio, id}))

    
const db = getFirestore()
const queryCollec = collection(db,"Orden");


 addDoc(queryCollec, orden)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))
    .finally(()=>{

        vaciarCarrito()
        setDatFrom({
            name:'',
            gmail:'',
            phone:'',
            validarGmail:'' 
        })
    })
}
}

if (cartList.length === 0) {
return <div >
            <h2>No hay productos en el carro</h2>
            <h3>Su numero de orden es: {id}</h3>
            <Link to='/' className="btn btn-dark"  > HOME</Link>
    </div>
}
const handleOnChange = (evt) => {
setDatFrom({
    ...datForm, 
    [evt.target.name]: evt.target.value
})

}
return (
    <div>
    <p>{precioTotal() !== 0 && `Precio Total: ${precioTotal()}`}</p>  

    <div className='container d-flex justify-content aling-item-center'>
                <form className='form-group w-50' onSubmit={generarOrden}>

                    <input className='form-control'
                    type="text" 
                    name='name'
                    placeholder='ingresar nombre'
                    onChange={handleOnChange} 
                    required
                    >
                    </input>

                    <input className='form-control'
                    type="text" 
                    name='gmail' 
                    placeholder='ingresar gamil' 
                    onChange={handleOnChange}
                    required
                    
                    >
                    </input>

                    <input className='form-control'
                    type="text" 
                    name='phone' 
                    placeholder='nnumero de celular' 
                    onChange={handleOnChange}
                    required
                    
                    >
                    </input>

                    <input className='form-control'
                    type="text" 
                    name='validarGmail' 
                    placeholder='validarGmail'
                    onChange={handleOnChange} 
                    required
                    
                    >
                    </input>

                    <button  className='btn btn-dark'>Generar Orden</button><br />
                    <button onClick={vaciarCarrito} className='btn btn-dark'>Vaciar Carrito</button>
                </form>
                </div>
                </div>
    )
}

export default From