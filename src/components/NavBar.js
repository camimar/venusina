
import imagenLogo from './assets/vart.png';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget.js';


function NavBar() {
    return (
      <div className="NavBar">
<Navbar bg="light" variant="light"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand href="#home">
          <img src={imagenLogo} width="60px" height="40px" alt="logo"/>{' '}
          Venusina - Galería de Arte Virtual
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Galería">
                <NavDropdown.Item href="#galeria/dibujo">Dibujo</NavDropdown.Item>
                <NavDropdown.Item href="#galeria/pintura">Pintura</NavDropdown.Item>
                <NavDropdown.Item href="#galeria/digital">Arte Digital</NavDropdown.Item>
                <NavDropdown.Item href="#galeria/collage">Collage</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#galeria/promo">SALE</NavDropdown.Item>
            </NavDropdown>
                <Nav.Link href="#eventos">Eventos</Nav.Link>
                <Nav.Link href="#sobre-nos">Sobre Venusina</Nav.Link>
                <Nav.Link href="#contacto">Contactanos</Nav.Link>
                <div>
                    <CartWidget></CartWidget>
                </div>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
     
    </div>
    );
  }

export default NavBar;