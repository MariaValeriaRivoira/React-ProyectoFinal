
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'


const NavBar = (   ) => {
  
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="pink" variant="dark">
                <Container>
                   <div className='m-5'>
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} to='/node_modules'>Perfumería Hoy</NavLink>
                    </div>                
                    
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                            to="/categoria/perfumes">Perfumes</NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                            to="/categoria/cremas">Cremas</NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                            to="/categoria/maquillajes">Maquillajes</NavLink>
                    </Nav>
                    <NavLink href="#">
                        <CartWidget    />
                    </NavLink>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </>
    )
}

export default NavBar
