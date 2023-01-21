import React from "react";
import { Link } from "react-router-dom";


import '../../containers/ItemListContainer/contenedor-productos.css'

const ItemList = ({arr}) => {
  
  return (
    <>
      {arr.map((e) => {
        <div className="item">
          <div className="zoom">
            <img src={e.foto} />
          </div>
          <p>{e.name}</p>
          <p>${e.price}</p>
          <Link to={`/productos/${e.id}`}>Más Info</Link>
          
         
        </div>;
    
        
      })}
    </>
  );
};

export default ItemList;
