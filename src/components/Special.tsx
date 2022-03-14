import './special.scss';
import { Container, Row, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import image from '../assets/pic.png'


function Special() {

    // const getWindowDimensions = () =>{
    //     const { innerWidth: width, innerHeight: height } = window;
    //     return {
    //       width,
    //       height
    //     };
    // }

    // const useWindowDimensions = () => {
    //     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
    //     useEffect(() => {
    //       function handleResize() {
    //         setWindowDimensions(getWindowDimensions());
    //       }
      
    //       window.addEventListener('resize', handleResize);
    //       return () => window.removeEventListener('resize', handleResize);
    //     }, []);
      
    //     return windowDimensions;
    //   }

    //   const { width } = useWindowDimensions();
      
    return (
        <Container className="special" fluid>
            <Row><h2>Today's Special</h2></Row>
            <Row className="justify-content-center">
                <Card className="card-video">
                    <Card.Img variant="top" src={image}></Card.Img>

                    <Card.Body>
                        <Card.Title>Count on Me</Card.Title>
                        <hr/>
                        <Card.Text>
                            Thank you for everything.
                            I know where I stand now..
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <ReactPlayer
                        className="video"
                        url="https://soundcloud.com/margaretaalicia/count-on-me?si=596fe3c99d4243e49b561ec6d3ba3479&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                        width="100%"
                        height="30"
                    />
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Special;