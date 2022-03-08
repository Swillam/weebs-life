import { Navbar,Nav,Container, NavbarBrand } from 'react-bootstrap';
import logo from '../img/logo.png';

function NavBar() {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="/"> 
            <div className='box'>
            <img
                  src={logo}
                  className="d-inline-block align-top navIcon"
                  alt="navIcon"
                />
                <span className='navTitle'>WeebsLife</span>
            </div>
          </NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="/random">Random</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
  