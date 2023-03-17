import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../IItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [Product,setProduct] = useState({})
    const [loading, setLoading]= useState(true)
    const {Productoid}= useParams();

    useEffect(()=>{
      const db = getFirestore()
      const queryDoc = doc(db, 'Productos',Productoid)
          getDoc(queryDoc)
              .then(respProd => setProduct( { id: respProd.id, ...respProd.data ()}))
              .catch(err => console.error(err))
              .finally(()=> setLoading(false))
  },[])
    
  return (
    <>
    {loading?
      <h2>loading</h2>
        :

        <ItemDetail Product={Product}/>
        }
    
    </>
  )
}

export default ItemDetailContainer