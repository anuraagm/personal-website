import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function HeaderComponent() {
    return (
        <div className='Navbar'>
            {/* code taken from https://react-bootstrap.github.io/components/navbar/ */}
            <Navbar fixed="top" bg="none">
                <Container>
                <Navbar.Brand href="#home">ANURAAG MUKTEVI</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Resume</Nav.Link>
                    <Nav.Link href="#home">Projects</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderComponent;