import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const GetProductos = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const { categoria } = useParams()

    useEffect(()=>{          
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        
        const queryCollectionFilter = categoria ?  query(queryCollection, where('categoria', '==', categoria)) : queryCollection 

        getDocs(queryCollectionFilter)
        .then(resp =>  setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))  
    }, [categoria])

    return [productos, loading]
}

export default GetProductos;