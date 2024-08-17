import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link to="/" as={NavLink}>
          Logo
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/cart" as={NavLink}>
              cart
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              about
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
