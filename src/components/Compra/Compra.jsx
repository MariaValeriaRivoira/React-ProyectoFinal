import { useEffect, useState } from "react";

import { auth } from "../../firebase/config";
import { useCartContext } from "../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import getUser from "../../hooks/getUser";
import { getFirestore, updateDoc, doc, arrayUnion } from "firebase/firestore";

import './compra.css';

const Compra = ({ data }) => {
  const { cartList, vaciarCarrito } = useCartContext();

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
      toast.error("Sin saldo suficiente para realizar esta compra");
    } else {
      await updateDoc(doc(db, "user", user.id), {
        saldo: saldo - total,
        compra: arrayUnion(...cartList)
      });
      toast.success("Operación exitosa");
      setActual(saldoActual - total)
      vaciarCarrito();
    }
    
  };

  

  return (
    <div className="compra">
      <section className="pagoCompra">
        <h4>Pago</h4>
        <div className="pagoCard">
          <p>Saldo en la cuenta: ${loading ? 0 : saldoActual}</p>
          <button onClick={onBuy}>Finalizar Compra</button>
        </div>
      </section>

      <section className="ordenCompra">
        <h4 style={{ marginBottom: 15 }}>Orden de compra</h4>
        {data.map((e) => (
          <div key={e.id} className="itemCompra">
            <p>x{e.cantidad} {e.nombre}</p>
            <p>${e.precio}</p>
          </div>
        ))}
        {data.map((e) => {
          total += e.precio * e.cantidad;
        })}
        <p style={{ marginTop: 20 }}>Total: ${total}</p>
      </section>

      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        theme="light"
        draggable={false}
        position="bottom-left"
      />
    </div>
  );
};

export default Compra;
