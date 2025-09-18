import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function WebNav (){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-regular fa-cloud fa-2x"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/anuragshukla00/">Linked In <i class="fa-brands fa-linkedin-in"></i></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Nav.Link href="mailto:anurag2125it@gmail.com">Email Us <i class="fa-solid fa-square-envelope"></i></Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}