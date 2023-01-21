import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Cargando from '../../components/Cargando/Cargando'
import Footer from "../../components/Footer/Footer";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Displayed from "../../components/Displayed/Displayed";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './estilo-contenedor.css';


const ItemDetailContainer = ()=>{

    const [producto, setProducto]=useState({})
    const { id } = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const queryProducto = doc(db, "productos", id);
        getDoc(queryProducto)
          .then((ans) => setProducto({ id: ans.id, ...ans.data() }))
          .catch((e) => console.log(e))
    
      }, [id]);

   
    return (
        <>
        
        <div className="estilo-contenedor">
        
            <ItemDetail data={producto} /> :
            <Cargando />
        </div>
        <Footer />

        </>
    );
}

export default ItemDetailContainer;