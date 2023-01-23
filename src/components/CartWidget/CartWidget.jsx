import React from "react";
import { Link } from 'react-router-dom';
import "../CartWidget/CartWidget.css";


const CartWidget = ({ count }) => {
  return (
      <li className='cart'>
        <Link to='/carrito'>
          <img src="https://images2.imgbox.com/d4/d5/1yYgDNrR_o.png" />
         
            <h3>{count}</h3>
          
        </Link>
      </li>
  );
}

export default CartWidget;