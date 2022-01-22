import './Navbar.scss';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavDropdown } from 'react-bootstrap';

function Navbar(props: any) {

    const onTrigger = (num: string, e?: any) => {
        props.getTabKey(num);
        document.getElementById('content')?.scrollIntoView();
    }

    return (
        <Container>
            <Nav className="justify-content-between">
                <Nav.Item><Nav.Link><span className='logo'>devbyalc</span></Nav.Link></Nav.Item>
                <NavDropdown title="menù" id="basic-nav-dropdown">
                    <button className="dropdown-item" onClick={(e) => onTrigger("1", e)}>On Special</button>
                    <NavDropdown.Divider />
                    <button className="dropdown-item" onClick={(e) => onTrigger("2", e)}>Youtube</button>
                    <button className="dropdown-item" onClick={(e) => onTrigger("3", e)}>Audio-only</button>
                </NavDropdown>
            </Nav>
            
        </Container>

    );
}

export default Navbar;