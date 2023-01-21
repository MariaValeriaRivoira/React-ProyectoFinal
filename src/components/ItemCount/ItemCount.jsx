import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock = 100, inital = 1, onAdd }) => {
  const [count, setCount] = useState(inital);
  const [inCart, setInCart] = useState(false)

  const handleCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restart = () => {
    if (count > inital) setCount(count - 1);
  };

  const handleOnAdd = () => {
    onAdd(count)
    setInCart(true)
  }

  return (
    <>
      {
        inCart ?
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 2}}>
        <Link to={'/productos'}>Seguir comprando</Link>
        <Link to={'/carrito'}>Ver Carrito</Link>
        </div>
        :
        <div>
        <p>Cantidad: {count}</p>
        <div className="cartBtns">
        <button onClick={handleCount}>+</button>
        <button onClick={restart}>-</button>
        <button onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
        </div>
      }
    </>
  );
};

export default ItemCount;
