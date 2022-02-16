import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // without Boostrap

function Navbars() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favorite">Favorite List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars;