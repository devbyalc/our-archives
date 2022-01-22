import './special.scss';
import { Container, Row, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';


function Special() {
    return (
        <Container className="base-second" fluid>
            <Row><h2>Today's Special</h2></Row>
            <Row className="justify-content-center">
                <Card className="card-video">
                    <ReactPlayer
                        className="video"
                        url="https://www.youtube.com/watch?v=Jj3Caf8WIdY"
                        width='100%'
                    />
                    <Card.Body>
                        <Card.Title>Count on Me</Card.Title>
                        <hr/>
                        <Card.Text>
                            I want you to know...<br/>
                            If you ever find yourself stuck in the middle of the sea
                            I'll sail the world to find you, <br/>
                            If you tossin' and you're turnin' and you just can't fall asleep
                            I'll sing a song beside you,<br/>
                            And if you ever forget how much you really mean to me
                            Every day I will remind you..
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Special;