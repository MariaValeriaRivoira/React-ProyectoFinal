import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../gFetch";

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})
    const { productoId } = useParams()
    useEffect(()=>{
        gFetch(productoId)
            .then(resp => setProduct(resp))
            .catch(err => console.log(err))
    }, [])
    return (
        <ItemDetail
            product={product}
        />
    )
}
export default ItemDetailContainer

