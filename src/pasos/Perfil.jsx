import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import getUser from "../hooks/getUser";
import Footer from "../components/Footer/Footer";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import Item from '../components/Item/Item';


import '../components/ItemDetail/ItemDetail';
import '../containers/ItemDetailContainer/estilo-contenedor.css';


const Perfil = () => {
  const [user, saldo, loading] = getUser();
  const [online, setOnline] = useState(null);
  const [estado, setEstado] = useState(true);
  const [saldoActual, setActual] = useState(null);

  const db = getFirestore();

  if (user != null) {
    user.compra.map(e => {
        console.log(e);
    })
  }

  const agregarSaldo = async () => {
    await updateDoc(doc(db, "user", user.id), {
      saldo: 1000 + saldo,
      fecha: new Date()
    });
    setActual(saldo + 1000);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setOnline(user);
      } else setOnline(null);
    });
    setActual(saldo);
  }, [saldo]);

  const fecha = new Date()
  const manana = new Date(fecha.getTime() + (24 * 60 * 60 * 1000));

  return (
    <>
      <div className="estilo-contenedor">
        <div className="item-detail2" >
          <div className="div-saldo">
            <h3>Saldo: ${saldo != null ? saldoActual : "0"}</h3>
            {fecha ? "Disponible" : fecha}
          </div>
          <button onClick={agregarSaldo}>Agregar Saldo</button>
          


        </div>
        <section style={{textAlign: 'center', marginTop: 20}} className="historial">
          <h3>Historial:</h3>
            {
                user != null 
                ? user.compra.map(e => (
                    <div key={e.id} className="historialCard">
                    <p>x{e.cantidad} {e.name}</p>
                    </div>
                ))
                : ''
            }
          </section>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
