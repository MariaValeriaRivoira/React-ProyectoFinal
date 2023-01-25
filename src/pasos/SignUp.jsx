import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import { addDoc, collection, getFirestore } from "firebase/firestore";


import '../containers/ItemDetailContainer/estilo-contenedor.css'

const SignUp = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const db = getFirestore();

  const sign = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(auth.currentUser, { displayName: user });
      await addDoc(collection(db, "user"), {
        userId: auth.currentUser.uid,
        saldo: 0,
        compra: []
      });
      setEmail("");
      setPass("");
      setUser("");
    

      toast.success('Registro y acceso exitoso')
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email en uso", "error");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Email inválido", "error");
      } else if (error.code === "auth/weak-password") {
        toast.error("Contraseña debe ser mayor a 5 dígitos", "error");
      } else if (error.code) {
        toast.error("Algo salió mal", "error");
      }
    }
  };

  return (
    <>
      <div className="estilo-contenedor">
        <div className="link-volver">
          <Link  to={'/login'}><img src="/public/volver.png"></img></Link>
        </div>
        
        {
          auth.currentUser !== null ?
         

          <h1 style={{background:'white', color:'red'}} > "Registrado exitosamente"... </h1> : 
          <form>
          <div className="formControl">
            <p>Usuario:</p>
            <input
              value={user}
              type={"text"}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="formControl">
            <p>Email:</p>
            <input
              value={email}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="formControl">
            <p>Contraseña:</p>
            <input
              value={pass}
              type={"password"}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <div className="formControl">
            <button onClick={sign}>Registrarse</button>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={true}
              theme="light"
              draggable={false}
              position="bottom-right"
            />
          </div>
        </form>
        }
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
