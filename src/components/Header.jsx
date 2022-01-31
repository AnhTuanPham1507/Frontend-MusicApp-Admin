import React from 'react';

import { Container, Form, FormControl, Nav, Navbar, Button, Dropdown, NavDropdown } from 'react-bootstrap';

import logo from '../assets/images/logo.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import HeaderUserInfo from './HeaderUserInfo';

import { PLAYLISTS, GENRES } from '../assets/db/db'

function Header() {
    const iconUser = React.forwardRef(({ children, onClick }, ref) => (
        <FontAwesomeIcon
            style={{ marginLeft: "1rem" }}
            icon={faUser} size="lg"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </FontAwesomeIcon>
    ));

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/songs">Songs</Nav.Link>
                        <Nav.Link href="/playlists">Playlists</Nav.Link>
                        <Nav.Link href="/genres">Genres</Nav.Link>
                    </Nav>

                    <Dropdown>
                        <Dropdown.Toggle as={iconUser} id="dropdown-custom-components">
                        </Dropdown.Toggle>
                        <HeaderUserInfo />
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;