import './audios.scss';
import { Container, Row,ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import songs from '../assets/songs.json';


function Audios() {
    const [song, setSong] = useState({title:"Praise Him", url:"https://www.bandlab.com/embed/?id=48d9cf2e-ae2d-ec11-981f-a04a5e798978"});
    const songList = songs.songs;
    const onSongSelect = (s:any) => {
        setSong({title:s.title, url:s.url});
    } 
    return (
        <Container className="audios" fluid>
            <Row>
                <iframe
                    title={song.title}
                    width="480"
                    height="202"
                    src={song.url}
                    frameBorder="0" allowFullScreen></iframe>
            </Row>
            <Row className='list'>
                <ListGroup>
                <ListGroup.Item className="sub" key="s-title" disabled>Songs</ListGroup.Item>
                {songList.map((s)=>
                <ListGroup.Item key={s.id} action onClick={(e)=>onSongSelect(s)} >{s.title}</ListGroup.Item>)
                }
                </ListGroup>
            </Row>
        </Container>
    );
}

export default Audios;