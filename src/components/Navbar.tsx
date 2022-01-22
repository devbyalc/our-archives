import './navbar.scss';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavDropdown } from 'react-bootstrap';

function Navbar() {
    return (
        <Container>
            <Nav className="justify-content-between">
                <Nav.Item><Nav.Link><span className='logo'>devbyalc</span></Nav.Link></Nav.Item>
                {/* <Nav.Item><Nav.Link>menù</Nav.Link></Nav.Item> */}
                <NavDropdown title="menù" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">On Special</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Youtube</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Audio-only</NavDropdown.Item>
               
                </NavDropdown>
            </Nav>
        </Container>

    );
}

export default Navbar;