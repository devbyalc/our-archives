import './header.scss';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Container>
            <div className="main-title"> 
            <strong>our archives.</strong>
            <p className="sub-title">"When you're high, I'll take the lows.<br/>
                You can ebb and I can flow.<br/>
                And we'll take it slow, and grow as we go."
            </p>
            </div>
        </Container>
    );
}

export default Header;