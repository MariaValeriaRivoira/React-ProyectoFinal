import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useCartContext } from "../../context/CartContext";
import { auth } from "../../firebase/config";
import Log from "../../components/Log/Log";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import GetOrder from "../../hooks/getOrder";
import Compra from '../../components/Compra/Compra';
import '../../containers/ItemDetailContainer/estilo-contenedor.css'

const CartContainer = () => {
  const { cartList, vaciarCarrito, borrar } = useCartContext();
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeat] = useState("");
  const [isGenerated, setGenerate] = useState(false);
  const [order, load, setActu] = GetOrder();

  

  let total = 0;

  cartList.map((e) => {
    let suma = Number(e.price) * Number(e.cantidad);
    total = total + suma;
  });

  const [log, setLog] = useState(false);
  const [msj, setMsj] = useState("");
  const [extra, setExtra] = useState("");
  const db = getFirestore();

  const getOrder = async (e) => {
    e.preventDefault();
    const today = new Date()
    if (names === "") {
      toast.error("Nombre requerido");
    } else if (phone === "") {
      toast.error("Telefono requerido");
    } else if (email === "") {
      toast.error("Email requerido");
    } else if (repeatEmail !== email) {
      toast.error("Los emails no coinciden");
    } else {
      await addDoc(collection(db, "order"), {
        order: cartList,
        nombre: names,
        telefono: phone,
        email: email,
        fecha: today
      })
      .then((ref) => {
        setMsj(`Su id de Pedido es: ${ref.id}`)
       
      })
     
      setGenerate(true);
      vaciarCarrito();
      setNames("");
      setPhone("");
      setEmail("");
      setRepeat("");
      setLog(true);
      
  
    }
  };
 
  const checkUser = () => {
    if (cartList.length === 0) {
      setLog(true);
      setMsj("Carrito Vacío");
    } else if (auth.currentUser === null) {
      setLog(true);
      setMsj("No estás registrado");
      setExtra("sign");
    } else {
      setLog(true);
      setMsj("Ya está todo listo");
      setExtra("buy");
    }
  };

  const handleClose = () => {
    setLog(false);
    setMsj("");
    setExtra("");
  };

  return (
    <>
      
      <div className="estilo-contenedor">
        <h2>Carrito</h2>
        <br />
        <div className="conte-Cart">
            <div>
                
                
                {cartList.length === 0 ? (
                  "¡¡¡Sin productos en el carrito!!!"
                ) : (
                  <ul className="cartList">
                    {cartList.map((e) => (
                      <li key={e.id}>
                        <img src={e.foto} alt="" />
                        <div className="itemsCart">
                          <p>{e.name}</p>
                          <p>Cantidad: {e.cantidad}</p>
                          <p>Unidad: ${e.price}</p>
                        </div>
                        <button className="cartDelete" onClick={() => borrar(e.id)}>
                          {" "}
                          Eliminar Producto{" "}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
            <br />
            <div>
          
                  {cartList.length === 0 ? (
                    <Link className="link-ver" style={{ marginTop: 70 }} to={"/productos"}>
                      Ir a ver Productos
                    </Link>
                  ) : (
                    <>
                      <h3 style={{ marginTop: 20 }}>Total: ${total}</h3>

                      <button className="cartBtn" onClick={vaciarCarrito}>
                        Vaciar Carrito
                      </button>
                      <button className="cartBtn" onClick={checkUser} >
                        Terminar Compra
                     </button>
                      
                      <section className="notUserOrder">
                        <h2>Llenar los datos para realizar el Pedido</h2>
              {isGenerated ? (
                ""
              ) : (
                <form>
                  <p>Nombre y Apellido:</p>
                  <input
                    onChange={(e) => setNames(e.target.value)}
                    value={names}
                  />

                  <p>Telefono:</p>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type={"number"}
                    value={phone}
                  />

                  <p>Email: </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type={"email"}
                    value={email}
                  />

                  <p>Repetir email: </p>
                  <input
                    onChange={(e) => setRepeat(e.target.value)}
                    type={"email"}
                    value={repeatEmail}
                  />
                  <div>
                    <button  type={"submit"} className="cartBtn" onClick={getOrder}>
                      Generar Pedido
                    </button>
                  </div>
                </form>
              )}
            </section>

              
                   
                    </>
                  )}
          </div>
          <ToastContainer
                  autoClose={1000}
                  hideProgressBar={true}
                  theme="light"
                  draggable={false}
                  position="bottom-left"
                />
                <Log
                  estado={log}
                  onClose={handleClose}
                  msj={msj}
                  adicional={extra}
                />
          </div>
      </div>
      <Footer />
    </>
  );
};

export default CartContainer;