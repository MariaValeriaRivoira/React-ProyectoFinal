import React from 'react';
import Footer from '../components/Footer/Footer';
import Item from '../components/Item/Item';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {

    return (
        <>
        <div className='estilo-contenedor2'>
            <img src="https://thumbs2.imgbox.com/d2/42/2lglNrqh_t.png" alt="" />
            <h2>Bienvenidos a "Perfumeria Hoy"</h2>
        </div>
        <Footer />
        </>
    );
}

export default Inicio;
