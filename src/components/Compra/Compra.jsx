import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useCartContext } from "../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import getUser from "../../hooks/getUser";
import { getFirestore, updateDoc, doc, arrayUnion } from "firebase/firestore";
import '../../containers/ItemDetailContainer/estilo-contenedor.css'
import './compra.css';

const Compra = ({ data }) => {
  const { cartList, vaciarCarrito } = useCartContext();
 console.log(data)
  const [user, saldo, fecha, loading] = getUser();
  const [saldoActual, setActual] = useState(0)

  useEffect(() => {
    setActual(saldo)
  }, [saldo])

  
  let total = 0;

  const db = getFirestore();

  const onBuy = async () => {
    if (total === 0) {
      toast.error('Sin productos en el carrito')
    } else if (saldo < total) {
      toast.error("No dispones de saldo");
    } else {
      await updateDoc(doc(db, "user", user.id), {
        saldo: saldo - total,
        compra: arrayUnion(...cartList)
      });
      toast.success("Compra realizada ");
      setActual(saldoActual - total)
      vaciarCarrito();
    }
    
  };

  

  return (
    
  

    <div className="compra">
      
      <section className="ordenCompra">
       <div className="div-listaProd">
        {data.map((e) => (
          <div key={e.id} className="itemCompra">
            <p>**{e.name} (x{e.cantidad}) </p>
            <p>${e.price}</p>
          </div>
        ))}
        </div>
        {data.map((e) => {
          total += e.price * e.cantidad;
        })}
        <h2 style={{ marginTop: 20 }}>Total a Pagar: ${total}</h2>
      </section><section className="pagoCompra">
       
        <div className="pagoCard">
          <h3>Saldo en la cuenta: ${loading ? 0 : saldoActual}</h3>
          <div className="div-button">
            <button onClick={onBuy}>Pagar</button>
          </div>
        </div>
      </section>
      <div className="link-volver">
          <Link  to={'/productos'}><img src="https://thumbs2.imgbox.com/cd/3b/kq5b1KRE_t.png"></img></Link>
    </div>
      

      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        theme="light"
        draggable={false}
        position="bottom-right"
      />
    </div>
  );
};

export default Compra;
