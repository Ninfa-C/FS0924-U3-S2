// creo un componente React per la navbar del mio ristorante
import { Container, Navbar, Nav } from 'react-bootstrap'

// i valori delle prop vanno tra doppi apici se sono stringhe, o tra { }
// in ogni altro caso

const MyNav = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">EpiBrary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav