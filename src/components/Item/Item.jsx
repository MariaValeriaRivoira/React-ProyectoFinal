import React from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";


import "../../containers/ItemListContainer/contenedor-productos.css";

const Item = ({ data }) => {


  return (
    <div  className="item">
      
      <p>{data.name}</p>
      <div className="zoom">
        <img src={data.foto} />
      </div>
      <p>${data.price}</p>
      <Link to={`/productos/${data.id}`}>Más Info</Link>
   
    </div>
  );
};

export default Item;

