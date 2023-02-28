import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../IItemDetail/ItemDetail"
import {gFetch} from "../utils/gfech"
export const ItemDetailContainer = () => {

    const [Product,setProduct] = useState({})
    const [loading, setLoading]= useState(true)
    const {Productoid}= useParams()


    useEffect(()=>{

        gFetch(Productoid)
            .then(resp => setProduct(resp))
            .finally( ()=>setLoading(false))


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