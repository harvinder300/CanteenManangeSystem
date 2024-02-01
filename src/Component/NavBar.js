// NavBar.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> {/* Link to the HomePage */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/customer-login" className="nav-link">Customer Login</Link>
                        <Link to="/vendor-login" className="nav-link">Vendor Login</Link>
                        <Link to="/about-us" className="nav-link">About Us</Link>
                        <Link to="/contact-us" className="nav-link">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
