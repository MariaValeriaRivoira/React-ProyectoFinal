import { useState } from 'react';
import "./Footer.css";

const Footer = () => {

    const [click, setClick] = useState(false)

    return (
        <div className='footer'>
         
           María Valeria Rivoira || &Todos los Derechos Reservados
        </div>
    );
}

export default Footer;
