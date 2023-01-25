import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ItemDetail.css';

const ItemDetail = ({ data }) => {


  const { agregarCarrito, buscarItem } = useCartContext();

  const notify = () => toast("Agregado al carrito");
  const excess = () =>
    toast.warn("No se pudo agregar, no hay suficiente stock");

  const onAdd = (cantidad) => {
    if (
      !!buscarItem(data.id) &&
      data.stock < buscarItem(data.id).cantidad + cantidad
    ) {
      excess();
    } else {
      agregarCarrito({ ...data, cantidad });
      notify();
    }
  };

  
  return (
    

    <div className="div-itemdetail">
       
        <h2>{data.name}</h2>
        
        <div className="item-detail">
          <div>
            <img src={data.foto} />
            <h3>${data.price}</h3>
          </div>
          <div className="detalle">
           
              
              
              {data.stock === 1 ? <strong>¡Último Disponible!</strong> : ""}
              <p>(Stock: {data.stock})</p>
              <div className="div-count">
                  {data.stock === 0 ? (
                    <button disabled>Agregar al carrito</button>
                  ) : (
                    <ItemCount stock={data.stock} inintial={1} onAdd={onAdd} />
                  )}
              </div>
              <ToastContainer
                autoClose={2000}
                hideProgressBar={true}
                theme="light"
                draggable={false}
                position="bottom-left"
              />
          </div>

        </div>
    </div>
  );
};

export default ItemDetail;
