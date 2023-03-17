

import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from '../CardWidget/CartWideget';
import { Link, NavLink } from 'react-router-dom';

const categorias =[
    {id : "REMERAS" , path: "/categoria/REMERAS", name:"REMERAS"},
    {id : "PANTALONES" , path: "/categoria/PANTALONES", name:"PANTALONES "}
]
const Navglam =()=> {
    return (
        <Navbar className='ColorMenu' expand="lg">
        <Container>
            <Navbar.Brand href="#">TIENDA GLAM</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className='me-auto my0 my-lg-3' style={{ maxHeight: '100%' }}navbarScroll>
                    <Link className='btn' to='/'>Home</Link>
                    {categorias.map(cat => <NavLink key={cat.id} className='btn' to={cat.path}>{cat.name}</NavLink >)}
                </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button className="buscar"  ><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
</svg></Button>
            </Form>
            <Link className='carrrito' to='/Cart'><CartWidget/></Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navglam ;
