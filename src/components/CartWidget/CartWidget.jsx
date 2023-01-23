import React from "react";
import { Link } from 'react-router-dom';
import "../CartWidget/CartWidget.css";


const CartWidget = ({ count }) => {
  return (
      <li className='cart'>
        <Link to='/carrito'>
          <img src="/public/carritoCompras.png" />
         
            <h3>{count}</h3>
          
        </Link>
      </li>
  );
}

export default CartWidget;
