import { useState } from 'react';
import Footer from '../components/Footer/Footer'
import getProductos from '../hooks/getProductos'
import Item from '../components/Item/Item'

import '../containers/ItemDetailContainer/estilo-contenedor.css'
import '../containers/ItemListContainer/contenedor-productos.css'

const Buscar = () => {

    const [busqueda, setBusqueda] = useState('')
    const [productos, loading] = getProductos()
    const arr = []

    mangas.map(e => {
        e.name.toLowerCase().includes(busqueda.toLowerCase()) ?
        '' : arr.push(e)
    })

    return (
        <>
            <div className='estilo-contenedor' style={{justifyContent: 'inherit'}}>
                <input onChange={(e) => setBusqueda(e.target.value)} className='buscador' type="text" />

                {
                    busqueda === '' || busqueda == ' ' ? 'Ningún resultado' :
                    <div className='contenedor-productos'>
                    {
                        productos.map(e => (
                            e.name.toLowerCase().includes(busqueda.toLowerCase()) ?
                            <Item data={e} /> : ''
                        ))
                    }
                    {
                        arr.length === productos.length
                        ? <p style={{margin: '0 auto'}}>Ningún resultado</p>
                        : ''
                    }
                    </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default Buscar;
