import React from "react";
import { Link } from 'react-router-dom';
import "../CartWidget/CartWidget.css";


const CartWidget = ({ count }) => {
  return (
      <li className='cart'>
        <Link to='/carrito'>
          <img src="https://drive.google.com/file/d/1hAy4N1WnLRKUGhOPs9iLWBbkx5hLcT34/view?usp=sharing" />
         
            <h3>{count}</h3>
          
        </Link>
      </li>
  );
}

export default CartWidget;