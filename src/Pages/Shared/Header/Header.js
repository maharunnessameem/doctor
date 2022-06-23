import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#features">Features</Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Another action
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">
        //                         Separated link
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="#deets">More deets</Nav.Link>
        //                 <Nav.Link eventKey={2} href="#memes">
        //                     Dank memes
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        {/* <img src={logo} alt="" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {/* {
                            user ?
                                <button className='btn-btn-link text-white text-decoration-none' onClick={handleSignOut}>Signout</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;