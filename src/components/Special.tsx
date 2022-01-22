import './Special.scss';
import { Container, Row, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';


function Special() {
    return (
        <Container className="base-second" fluid>
            <Row className="justify-content-center">
                <Card className="card-video">
                    <Card.Header><ReactPlayer
                        className="video"
                        url="https://www.youtube.com/watch?v=Jj3Caf8WIdY"
                        width='100%'
                    /></Card.Header>
                    <Card.Body>
                        <Card.Title>When in doubts!</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Special;