import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import { ItemCount } from '../../components/ItemCount/ItemCount'
import { gFetch } from '../../gFetch'
import '../../components/ItemList/ItemList'
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [ products, setProducts ] =   useState([])
    const [ loading, setLoading ] = useState(true) 
    const { categoriaId } = useParams()
    
    useEffect(()=>{
        if (categoriaId) {
            gFetch() 
            .then( resp =>  setProducts(resp.filter(product => product.categoria === categoriaId )) )   // en esta linea cambia el estado 
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))             
        } else {
            gFetch() 
            .then( resp =>  setProducts(resp) )    
            .catch( err => console.log( err ) )
            .finally(()=> setLoading(false))            
        }   
    }, [categoriaId])

       
    return (
    <>
        <div className="abs-center">
               <h2>{ greeting }</h2>
        </div> 
        
        { loading ? 
            <h2>Espere mientras cargamos los productos</h2> 
                :
            <ItemList products={products} />
        }
      
    </>
    )
}

export default ItemListContainer
