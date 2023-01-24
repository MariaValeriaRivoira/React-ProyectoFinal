import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Cargando from '../../components/Cargando/Cargando'
import Footer from "../../components/Footer/Footer";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Displayed from "../../components/Displayed/Displayed";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './estilo-contenedor.css';


const ItemDetailContainer = ()=>{

    const [data, setData]=useState({})
    const { productoId } = useParams()
    console.log('itc')
    useEffect(() => {
        const db = getFirestore();
        const queryProducto = doc(db, "productos", productoId);
        getDoc(queryProducto)
          .then((ans) => setData({ id: ans.id, ...ans.data() }))
          .catch((e) => console.log(e))
    
      }, [productoId]);

   
    return (
        <>
        <div className="estilo-contenedor">
        
        
        {
            data.id?
            <ItemDetail data={data} /> :
            <Cargando />
        } 
        <br />
        <br />
        {
            data.id?
            <Displayed actual={data.name} /> :
            ''
        }   
        </div>

        <Footer />

        </>
    );
}

export default ItemDetailContainer;