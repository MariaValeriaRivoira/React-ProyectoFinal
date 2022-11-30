import { useState } from 'react'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  let greeting = 'Bienvenidos a "Perfumeria Hoy"'
  let saludar = () => alert('que tengas un buen día')

  return (
    <div>
      <NavBar    />
      <ItemListContainer
        greeting = {greeting}
      />
    </div>
  )
}

export default App
