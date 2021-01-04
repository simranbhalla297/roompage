import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Fylo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Team</Nav.Link>
            <Nav.Link>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
