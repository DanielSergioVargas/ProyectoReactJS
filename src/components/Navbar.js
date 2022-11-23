
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBootstrap() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda Jekyll</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contactanos</Nav.Link>
            <Nav.Link href="#pricing"><i className="bi bi-cart"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBootstrap;