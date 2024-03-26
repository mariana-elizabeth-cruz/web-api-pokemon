import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navColor">
                <Container  >
                    <Navbar.Brand as={Link} to={"/"} >
                        <img className="navImg" src="/img/logo.png" alt="Logo de app" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto navMenu">
                            <Nav.Link className="navMenuLink" as={Link} to={"/"} >Home</Nav.Link>
                            <Nav.Link className="navMenuLink" as={Link} to={"/lista"} >Lista</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <NavDropdown title="Ordenar" id="collapsible-nav-dropdown" className="navMenuOrder" >
                                <NavDropdown.Item  as={Link} to={"/ordenarId"} >
                                    Numero
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/ordenarName"} >
                                    Nombre
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/ordenarTam"} >
                                    Tamaño
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/ordenarPeso"} >
                                    Peso
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="#deets">Otros</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Otros detalles
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;

