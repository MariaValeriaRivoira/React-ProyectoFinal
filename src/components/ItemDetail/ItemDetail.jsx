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
    <div className="item-detail">
      <img src={data.foto} />

      <div className="detalle">
          <p>{data.categotia}</p>
          <p>{data.name}</p>
          
          <p>${data.price}</p>
          {data.stock === 1 ? <strong>¡Último Disponible!</strong> : ""}
          <p>Stock: {data.stock}</p>

          {data.stock === 0 ? (
            <button disabled>Agregar al carrito</button>
          ) : (
            <ItemCount stock={data.stock} inintial={1} onAdd={onAdd} />
          )}
          <ToastContainer
            autoClose={1000}
            hideProgressBar={true}
            theme="dark"
            draggable={false}
            position="bottom-right"
          />
      </div>

    </div>
  );
};

export default ItemDetail;
