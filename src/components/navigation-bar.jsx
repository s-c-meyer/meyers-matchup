import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand as={Link} to='/'>Meyer's Matchup</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link href='#leaderboard'>Leaderboard</Nav.Link>
            <NavDropdown title='Game Selection' id='collapsible-nav-dropdown'>
              <NavDropdown.Item href='game1'>Game1</NavDropdown.Item>
              <NavDropdown.Item href='game2'>Game2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}