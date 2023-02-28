import { gFetch } from "../utils/gfech"
import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer =() =>{
    const [Productos, setPorductos] =useState([])
    const [loading, steLoading]= useState(true)
    const {Categoriaid} = useParams()
    
    useEffect(() => {
        if(Categoriaid){ gFetch()
            .then(resp => setPorductos(resp.filter(producto => producto.categoria === Categoriaid)))
            .catch( err =>console.log(err))
            .finally( ()=>steLoading(false))
        }else {
         gFetch()
            .then(resp => setPorductos(resp))
            .catch( err =>console.log(err))
            .finally( ()=>steLoading(false))
        }
    }, [Categoriaid])


    return (
        <>
        {
            loading ?
                <h2>loading....</h2>
                :
            <>
            <ItemList Productos={Productos}/>
            </>
        }
       
        
        </>
    )
}

export default ItemListContainer