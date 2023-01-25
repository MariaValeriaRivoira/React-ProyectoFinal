import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

import '../containers/ItemDetailContainer/estilo-contenedor.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [online, setOnline] = useState(null);
  const [error, setError] = useState("");

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) setOnline(user)
      else setOnline(null)
    })
  }, [])

  const signIn = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      const name = await userName()
      setOnline(name)
      toast.success(`Acceso exitoso`)
      setError("");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta", "error");
      } else if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado", "error");
      } else {
        setError("Algo salió mal", "error");
      }
    }
  };

  const exit = (e) => {
    e.preventDefault();
    auth.signOut();
    setOnline(null);
    toast(`Nos vemos.`);
  };

  function userName() {
    return new Promise(resolve => {
      if (auth.currentUser != null) {
        resolve(auth.currentUser)
      }
    });
  }

  return (
    <>
      <div className="estilo-contenedor">
        {online != null ? (
          <section className="userProfile">
            <img
              src={online.photoURL ? online.photoURL : "/logo.png"}
              alt="foto de perfil"
            />
            <div className="infoProfile">
              <p>Bienvenido, {online.displayName}</p>
              <Link to={`/${online.uid}/perfil`}>Mi perfil</Link>
              <button onClick={exit}>Cerrar Sesión</button>
            </div>
          </section>
        ) : (
          <>
            <h2>Acceso</h2>
            <form action="/" >
              <div className="formControl">
                <p>Email:</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="formControl">
                <p>Contraseña:</p>
                <input
                  value={pass}
                  type={"password"}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

              <div className="formControl">
                {error === "" ? "" : <p>{error}</p>}
                  <button onClick={signIn}>Ingresar</button>
              </div>
            </form>
            <h3 style={{ marginTop: 20 }}>
              ¿No estás Registrado? <Link to={"/signUp"}>Crear cuenta</Link>
            </h3>
          </>
        )}
        <ToastContainer
                  autoClose={1000}
                  hideProgressBar={true}
                  theme="light"
                  draggable={false}
                  position="bottom-left"
                />
      </div>

      <Footer />
    </>
  );
};

export default Login;
