import './header.scss';
import { Container, Row } from 'react-bootstrap';
import Player from './Player'

function Header() {
    return (
        <Container fluid className="main-title">
            <Row className="main-title">
                <strong>our archives.</strong>
                <p className="sub-title">"When you're high, I'll take the lows.<br />
                    You can ebb and I can flow.<br />
                    And we'll take it slow, and grow as we go."
                </p>
            </Row>
            <Row className="player">
                <Player />
                <svg className="arrow"  viewBox="0 0 16 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.64645 132.354C7.84171 132.549 8.15829 132.549 8.35355 132.354L11.5355 129.172C11.7308 128.976 11.7308 128.66 11.5355 128.464C11.3403 128.269 11.0237 128.269 10.8284 128.464L8 131.293L5.17157 128.464C4.97631 128.269 4.65973 128.269 4.46447 128.464C4.2692 128.66 4.2692 128.976 4.46447 129.172L7.64645 132.354ZM7.5 0V3H8.5V0L7.5 0ZM7.5 9V15H8.5V9H7.5ZM7.5 21L7.5 27H8.5V21H7.5ZM7.5 33L7.5 39H8.5V33H7.5ZM7.5 45L7.5 51H8.5V45H7.5ZM7.5 57V63H8.5V57H7.5ZM7.5 69V75H8.5L8.5 69H7.5ZM7.5 81V87H8.5V81H7.5ZM7.5 93L7.5 99H8.5V93H7.5ZM7.5 105L7.5 111H8.5V105H7.5ZM7.5 117V123H8.5V117H7.5ZM7.5 129V132H8.5L8.5 129H7.5ZM7.29289 132.707C7.68342 133.098 8.31658 133.098 8.70711 132.707L15.0711 126.343C15.4616 125.953 15.4616 125.319 15.0711 124.929C14.6805 124.538 14.0474 124.538 13.6569 124.929L8 130.586L2.34315 124.929C1.95262 124.538 1.31946 124.538 0.928932 124.929C0.538408 125.319 0.538408 125.953 0.928932 126.343L7.29289 132.707ZM7 0V3H9V0L7 0ZM7 9V15H9V9H7ZM7 21V27H9V21H7ZM7 33L7 39H9V33H7ZM7 45L7 51H9V45H7ZM7 57V63H9V57H7ZM7 69V75H9L9 69H7ZM7 81V87H9V81H7ZM7 93L7 99H9V93H7ZM7 105L7 111H9V105H7ZM7 117V123H9V117H7ZM7 129V132H9V129H7Z" fill="white" />
                </svg>
            </Row>
        </Container>
    );
}

export default Header;