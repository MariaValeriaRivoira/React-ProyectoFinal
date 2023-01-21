import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';

const GetOrder = () => {

    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [actu, setActu] = useState(0)
    const { cartList } = useCartContext()

    useEffect(()=>{          
        const db = getFirestore()
        getDocs(collection(db, 'order'))
        .then(resp =>  setOrder( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))  
    }, [actu])

    return [order, loading, setActu]
}

export default GetOrder;