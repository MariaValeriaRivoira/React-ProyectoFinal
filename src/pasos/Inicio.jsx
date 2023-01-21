import React from 'react';
import Footer from '../components/Footer/Footer';
import Item from '../components/Item/Item';
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {

    return (
        <>
        <div className='estilo-contenedor2'>
            <img src="../../public/inicio2.png" alt="" />
            <h2>Bienvenidos a "Perfumeria Hoy"</h2>
        </div>
        <Footer />
        </>
    );
}

export default Inicio;
