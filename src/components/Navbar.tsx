import './navbar.scss';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navbar() {
    return (
        <Container>
            <Nav className="justify-content-between">
                <Nav.Item><Nav.Link><span className='logo'>devbyalc</span></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>menù</Nav.Link></Nav.Item>
            </Nav>
        </Container>

    );
}

export default Navbar;