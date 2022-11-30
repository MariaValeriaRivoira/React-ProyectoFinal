
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css'


const NavBar = (   ) => {
  
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="pink" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Perfumeria Hoy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-danger' href="#features">Perfumes</Nav.Link>
                        <Nav.Link className='text-danger' href="#pricing">Cremas</Nav.Link>
                        <Nav.Link className='text-danger' href="#deets">Maquillaje</Nav.Link>
                    </Nav>
                    <Nav.Link href="#">
                        <CartWidget    />
                    </Nav.Link>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </>
    )
}

export default NavBar
