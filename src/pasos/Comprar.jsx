import Footer from '../components/Footer/Footer';
import { useCartContext } from '../context/CartContext';
import Compra from '../components/Compra/Compra';

import '../containers/ItemDetailContainer/estilo-contenedor.css';

const Comprar = () => {

    const {cartList} = useCartContext()

    return (
        <>
         <div className='estilo-contenedor'>
            <Compra data={cartList} />
         </div>
         
         <Footer />
        </>
    );
}

export default Comprar;
