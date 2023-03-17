import {collection, getDocs, getFirestore, query, where, } from 'firebase/firestore';
import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css';

export const ItemListContainer =() =>{
    const [Productos, setPorductos] =useState([])
    const [loading, steLoading]= useState(true)
    const {Categoriaid} = useParams()




    useEffect(() =>{
        const db = getFirestore()
            const queryCollection = collection(db,'Productos');
            const queryFilter = Categoriaid ? query(queryCollection , where( 'categoria', '==', Categoriaid)) : queryCollection;
    
            getDocs(queryFilter)
            .then(respCollection => setPorductos(respCollection.docs.map(prodc =>({id:prodc.id, ...prodc.data() }))) )
            .catch(err => console.error(err))
            .finally( ()=>steLoading(false))
    
    },[Categoriaid])
    
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