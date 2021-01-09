import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.css'
// import { Link } from 'react-router-dom';

function NavTabs(props) {
    return (
        <div>
            <Container>
                <Navbar id='navDiv' expand='lg'>
                    <Navbar.Brand  className='home' href='/' >Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav  className='mr-auto'>
                            <Nav.Link className='about' href='about'>About</Nav.Link>
                            <Nav.Link className='contact' href='contact' >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
};

export default NavTabs;