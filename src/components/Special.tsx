import './special.scss';
import { Container, Row, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import {useState, useEffect} from 'react';


function Special() {

    const getWindowDimensions = () =>{
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }

      const { width } = useWindowDimensions();
      
    return (
        <Container className="special" fluid>
            <Row><h2>Today's Special</h2></Row>
            <Row className="justify-content-center">
                <Card className="card-video">
                    <ReactPlayer
                        className="video"
                        url="https://www.youtube.com/watch?v=Jj3Caf8WIdY"
                        width="100%"
                        height={width > 600 ? "50vh": "100%"}

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