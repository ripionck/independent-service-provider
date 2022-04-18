
import Button from '@restart/ui/esm/Button';
import React from 'react';
import logo from '../../../gym_logo .png'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Container fluid>
                    <img className="ms-5 me-3" src={logo} height="40px" alt=""></img>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="text-decoration-none me-3 text-dark" to="/">Home</Link>
                            <Link className="text-decoration-none me-3 text-dark" to="/services">Service</Link>
                            <Link className="text-decoration-none me-3 text-dark" to="/trainer">Trainer</Link>
                            <Link className="text-decoration-none me-3 text-dark" to="/about">About</Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button className="me-2 border-0">Sign Up</Button>
                            <Button className="me-5 border-0">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;