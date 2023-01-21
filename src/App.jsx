import "./App.css";
import React, { createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pasos/Inicio";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemListContainer/ItemListContainer";
import Buscar from "./pasos/Buscar";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./containers/CartContainer/CartContainer";
import Login from "./pasos/Login";
import SignUp from "./pasos/SignUp";
import { auth } from "./firebase/config";
import Comprar from "./pasos/Comprar";
import Perfil from "./pasos/Perfil";

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route index path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="/buscar" element={<Buscar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/:userId/comprar" element={<Comprar />} />
            <Route path="/:userId/perfil" element={<Perfil />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;