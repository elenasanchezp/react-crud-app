import React from  'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    return(       
        <>             
            <header>
                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/">React CRUD App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                        <NavDropdown.Item href="/help">Help</NavDropdown.Item>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>         
        </>
    );
}

export default Header;