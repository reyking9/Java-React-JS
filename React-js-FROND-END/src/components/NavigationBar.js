import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class NavigationBar extends React.Component {
  render() {

    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">Inventario de Vacunacion</Link>
        <Nav className="mr-auto">
          <Link to={"add"} className="navbar-brand">Agregar usuario</Link>
          <Link to={"list"} className="navbar-brand">Listar usuarios</Link>

        </Nav>
      </Navbar>
    );
  }
}
export default NavigationBar