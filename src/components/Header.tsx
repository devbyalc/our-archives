import './header.scss';
import { Container, Row } from 'react-bootstrap';
import Player from './Player'

function Header() {
    return (
        <Container className="container">
            <Row className="main-title">
                <strong>our archives.</strong>
                <p className="sub-title">"When you're high, I'll take the lows.<br />
                    You can ebb and I can flow.<br />
                    And we'll take it slow, and grow as we go."
                </p>
            </Row>
            <Row>
                <Player />
            </Row>
        </Container>
    );
}

export default Header;