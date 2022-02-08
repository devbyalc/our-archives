import './youtube.scss';
import { Container, Row, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import type {Media} from '../types/main';

function Youtube(props:any) {
  const [vid, setVideo] = useState({ title: "Near or Far", url: "https://www.youtube.com/embed/ynXk3mlF1Yw" });
  const vidList = props.videos;
  const onSelect = (s: any) => {
    setVideo({ title: s.title, url: s.url });
  }

  const getWindowDimensions = () => {
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
    <Container className="youtube" fluid>
      <Row>
        <iframe 
        width="100%" 
        height={width > 600 ? 500: 300} 
        src={vid.url}
        title={vid.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
      </Row>
      <Row className='list'>
        <ListGroup>
          <ListGroup.Item className="sub" key="s-title" disabled>Covers</ListGroup.Item>
          {vidList?.map((s:Media) =>
            <ListGroup.Item key={s.id} action onClick={(e) => onSelect(s)} >{s.title}</ListGroup.Item>)
          }
        </ListGroup>
      </Row>
    </Container>
  );
}

export default Youtube;