import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";

import './Log.css';

const Login = ({ estado, onClose, msj, adicional }) => {

  return (
    <div className="login"
      style={
        estado
          ? {
             
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }
          : {}
      }
    >
      <div
        className="modal"
        style={
          estado
            ? { display: "flex", opacity: "1" }
            : { display: "none", opacity: "0" }
        }
      >
        <button className="close" onClick={onClose}>
          X
        </button>
        <p>{msj}</p>
        {
          adicional === 'sign' ?
          <Link to={"/login"} className="sign">
          Acceso / Registro
          </Link> : ''
        }
        {
          adicional === 'buy' ?
          <Link className="sign" to={`/${auth.currentUser.uid}/compra`}>Ir a comprar</Link>
          : ''
        }
      </div>
    </div>
  );
};

export default Login;