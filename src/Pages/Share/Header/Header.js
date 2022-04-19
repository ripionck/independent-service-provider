

import React from 'react';
import logo from '../../../gym_logo .png'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from '@firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
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
                        <Form className="d-flex align-items-center">
                            <Link to="/register" className="text-decoration-none text-primary me-3 border-0">Register</Link>
                            {user ? <button className="btn btn-link text-decoration-none" onClick={handleLogOut}>Log Out</button> :

                                <Link to="/login" className="text-decoration-none text-primary  me-5 border-0">Login</Link>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;