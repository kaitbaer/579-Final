import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">Bri</Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}
export default Navigation;