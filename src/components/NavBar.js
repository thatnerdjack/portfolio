import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {
    AiOutlineUser,
    AiOutlineHome
} from "react-icons/ai";

import { MdWork } from "react-icons/md"

export default function NavBar() {
    const [expand, updateExpanded] = useState(false);

    return (
        <Navbar className="nav-bg" expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <h3 style={{ color: "white" }}>JWD</h3>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    {/* <span></span>
                    <span></span>
                    <span></span> */}
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <MdWork style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
