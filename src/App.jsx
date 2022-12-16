import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
    let greeting = 'Bienvenidos a "Perfumeria Hoy"'
    let saludar = () => alert('que tengas un buen día')

    return (
        <div>
            <BrowserRouter>  
                <NavBar  
                 
                />   
                <Routes >
                    <Route path='/' element={ <ItemListContainer greeting={greeting} /> } />
                    <Route path='/categoria/:categoriaId' element={ <ItemListContainer greeting={greeting} /> } />
                    
                    <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
                    <Route path='/cart' element={<CartContainer />} />                
                                      
                    <Route path='*' element={<Navigate to='/' />}/>
                </Routes>          
                
            </BrowserRouter>       

        </div>
    )
}

export default App
