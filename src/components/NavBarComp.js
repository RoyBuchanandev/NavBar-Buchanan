import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default class NavBarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant = {"dark"} expand="lg">
  <Container>
    <Navbar.Brand href="#home">CODERHOUSE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Coder</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Otra Acción</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Algo más</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Tp Buchanan</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
