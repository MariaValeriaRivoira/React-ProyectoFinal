import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";

import './Log.css';

const Log = ({ estado, onClose, msj, adicional }) => {

  return (
    <div className="login1"
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
        className="login2"
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
          <Link className="sign" to={`/${auth.currentUser.uid}/comprar`}>Ir a comprar</Link>
          : ''
        }
      </div>
    </div>
  );
};

export default Log;