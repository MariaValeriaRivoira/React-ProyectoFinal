import React, { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import './NavBar.css';

const NavBar = () => {
  const { cartList } = useCartContext();

  useEffect(() => {
    let num = 0;
    cartList.map((e) => {
      num = num + e.cantidad;
    });
    setCount(num);
    onAuthStateChanged(auth, (user) => {
      if (user) setOnline(user);
      else setOnline(null);
    });
  }, [cartList]);

  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(false);
  const [show, setShow] = useState(false);
  const [online, setOnline] = useState("");

  const showNav = () => {
    setCurrent(!current);
  };

  return (
    <div>
      <nav>
        <div className="brand">
          <Link to={"/"}>
            <img className="logo" src="https://thumbs2.imgbox.com/15/a7/DxaC3d9b_t.png"></img>
          </Link>
          <h2>Perfumeria Hoy</h2>
          
          
        </div>
        <ul className={current ? "items show" : "items"} >
          
          <li className="div-cat">
            <Link to={"/productos"}>Todos los Productos</Link>
          </li>
          
          <li className="div-cat">
              <Link to={"/categoria/perfumes"}>Perfumes</Link>
          </li>
          <li className="div-cat">
                <Link to={"/categoria/cremas"}>Cremas</Link>
          </li>
          <li className="div-cat">
                <Link to={"/categoria/maquillajes"}>Maquillajes</Link>
          </li>
        </ul>
          
        
        <ul className="div-carr">
          
        
          {online ? (
              <div className="div-persona"> 
             
                  <Link to={online ? `/${online.uid}/perfil` : "/login"}>
                      <img src="https://images2.imgbox.com/66/f9/VcTqkJUj_o.png"  alt="persona" />

                  </Link>

                  <div>
                      {online.displayName}
                  </div>
              </div>
          ) : (
            ""
          )}
          <li>
            <Link to={"/login"}>
              <img src="https://images2.imgbox.com/52/14/j3isb8p1_o.png"></img>
                
              
            </Link>
          </li>
          <CartWidget count={count} />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
