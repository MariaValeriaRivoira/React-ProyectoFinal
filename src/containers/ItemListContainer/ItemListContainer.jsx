import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cargando from "../../components/Cargando/Cargando";
import Footer from "../../components/Footer/Footer";
import Item from "../../components/Item/Item";
import getProductos from "../../hooks/getProductos";
import Paginas from "../../components/Paginas/Paginas"

import "./contenedor-productos.css";

const ItemListContainer = () => {
  const { categoria } = useParams();
  
  const btnCount = [];

  useEffect(() => {
    setFin(15);
    setInicio(0);
    setPosicion(0);
  }, [categoria]);

  const [productos, loading] = getProductos();

  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(15);
  const [posicion, setPosicion] = useState(0);

  let current = [];

  if (loading != true) {
    productos.map((e, i) => {
      if (i >= inicio && i <= fin) {
        current.push(e);
      } else {
      }
    });
  }

  const cambio = (e) => {
    if (e.target.value === "next" && posicion != btnCount.length - 1) {
      setPosicion(posicion + 1);
      setInicio(btnCount[posicion + 1] - 15);
      setFin(btnCount[posicion + 1]);
    } else if (e.target.value === "prev" && posicion != 0) {
      setPosicion(posicion - 1);
      setInicio(btnCount[posicion - 1] - 15);
      setFin(btnCount[posicion - 1]);
    } 

    if (!isNaN(e.target.value)) {
      setInicio(e.target.value - 15);
      setFin(e.target.value);
      setPosicion(e.target.innerText - 1);
    }
  };

  return (
    <>
      <div className="estilo-contenedor">
        {loading ? "" : <h2>Productos</h2>}

        {loading ? (
          <Cargando />
        ) : (
          <div className="contenedor-productos productosContainer">
            {current.map((e, i) => (
              <Item key={i} data={e} />
            ))}
          </div>
        )}

        {loading ? (
          ""
        ) : (
          <Paginas
            func={cambio}
            item={productos}
            posicion={posicion}
            btnCount={btnCount}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ItemListContainer;
